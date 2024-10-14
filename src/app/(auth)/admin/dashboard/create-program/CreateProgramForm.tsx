"use client";
import React, { useContext, useEffect, useState } from "react";
import { createProgram, findWorkout, getPlansWithWorkouts } from "./actions";
import toast from "react-hot-toast";
import { useFormState } from "react-dom";
import { AdminContext } from "@/context/AdminContext";

type TPlans = {
  slug: string;
  workouts: {
    slug: string;
  }[];
};

type TData = {
  id: string;
  slug: string;
  title: string;
  goal: string;
  type: string;
  duration: string;
  daysPerWeek: string;
  img: string;
  description: string;
  shortTitle: string;
  planId: string | null;
  days: {
    id: string;
    title: string;
    headers: string[];
    exercises: string[];
    workoutId: string | null;
  }[];
} | null;

export type TNewExercise = {
  name: string;
  sets: string;
  reps: string;
  rest: string;
};

const CreateProgramForm = () => {
  const [isSelectionDone, setIsSelectionDone] = useState(false);
  const [workout, setWorkout] = useState<string>("");

  return (
    <div>
      {isSelectionDone ? (
        <AddProgramForm
          workout={workout}
          setIsSelectionDone={setIsSelectionDone}
        />
      ) : (
        <SelectWorkoutForm
          setIsSelectionDone={setIsSelectionDone}
          setWorkout={setWorkout}
        />
      )}
    </div>
  );
};

const SelectWorkoutForm = ({
  setIsSelectionDone,
  setWorkout,
}: {
  setIsSelectionDone: React.Dispatch<React.SetStateAction<boolean>>;
  setWorkout: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [plans, setPlans] = useState<TPlans[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedWorkout, setSelectedWorkout] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const plans = await getPlansWithWorkouts();
      setPlans(
        plans.map((p) => {
          return {
            slug: p.slug,
            workouts: p.workouts.map((w) => {
              return {
                slug: w.slug,
              };
            }),
          };
        })
      );
    };
    fetchData().catch(console.error);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSelectionDone(true);
    setWorkout(
      plans
        .find((plan) => plan.slug === selectedPlan)
        ?.workouts.find((workout) => workout.slug === selectedWorkout)
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="plans">Select Plan</label>
        <select
          name="plans"
          id="plans"
          className="border px-3 py-2 rounded-md"
          onChange={(e) => setSelectedPlan(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Choose One
          </option>
          {plans.map((plan, idx) => (
            <option key={idx} value={plan.slug}>
              {plan.slug}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="workouts">Select Workout</label>
        <select
          name="workouts"
          id="workouts"
          className="border px-3 py-2 rounded-md"
          defaultValue=""
          disabled={!selectedPlan}
          onChange={(e) => setSelectedWorkout(e.target.value)}
        >
          <option value="" disabled>
            Choose One
          </option>
          {plans
            .find((plan) => plan.slug === selectedPlan)
            ?.workouts.map((workout, idx) => (
              <option key={idx} value={workout.slug}>
                {workout.slug}
              </option>
            ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={!selectedWorkout}
        className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Select Workout
      </button>
    </form>
  );
};

const AddProgramForm = ({
  workout,
  setIsSelectionDone,
}: {
  workout: string;
  setIsSelectionDone: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<TData>(null);
  const [newExercise, setNewExercise] = useState<TNewExercise>({
    name: "",
    sets: "",
    reps: "",
    rest: "",
  });
  const [exercises, setExercises] = useState<string[]>([]);
  const { user } = useContext(AdminContext);

  const initialState = {
    message: "",
    title: "",
    exercises: [],
  };

  const [state, formAction] = useFormState(createProgram, undefined);

  useEffect(() => {
    if (!workout) return;

    const fetchWorkoutData = async () => {
      const res = await findWorkout(workout);
      setData(res);
    };
    fetchWorkoutData().catch(console.error);
  }, [workout]);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Program created successfully!");
      // Reset form or redirect as needed
      setNewExercise({
        name: "",
        sets: "",
        reps: "",
        rest: "",
      });
      setExercises([]);
      setData(null);
      setIsSelectionDone(false);
    } else if (state?.message === "error") {
      toast.error("Failed to create program. Please try again.");
    }
  }, [state, setIsSelectionDone]);

  const handleClickExercise = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      newExercise.name === "" ||
      newExercise.sets === "" ||
      newExercise.reps === "" ||
      newExercise.rest === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }
    setExercises([
      ...exercises,
      `["${newExercise.name}", "${newExercise.sets}", "${newExercise.reps}", "${newExercise.rest}"]`,
    ]);
    setNewExercise({
      name: "",
      sets: "",
      reps: "",
      rest: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (exercises.length === 0) {
      toast.error("Please add at least one exercise before submitting.");
      return;
    }
    //If exercise are present, proceed with form submission
    const formData = new FormData(e.currentTarget);
    formData.append("workoutId", data?.id!);
    formData.append("exercises", JSON.stringify(exercises));
    formAction(formData);
  };

  //If something went wrong
  if (workout == "") return <div>Try again</div>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {data && (
          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Program Infos</h4>
            <div className="flex flex-col justify-center">
              <div className="text-sm text-opacity-10">
                Days Per Week ={" "}
                <span className="font-bold">{data.daysPerWeek}</span>
              </div>
              <div className="text-sm">
                Currently have{" "}
                <span className="font-bold text-base">{data.days.length}</span>{" "}
                day program.
              </div>
            </div>
          </div>
        )}
        <label className="text-xl" htmlFor="title">
          Title &#42;
        </label>
        <input
          className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
          id="title"
          name="title"
          placeholder={`Workout ${data?.days.length! + 1}: ...Day`}
          type="text"
        />
        {state?.errors?.title && (
          <div className="text-red-500">{state.errors.title}</div>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center justify-between">
            <label className="text-xl" htmlFor="exercise">
              New Exercise
            </label>
            <button
              type="button"
              onClick={handleClickExercise}
              className="border border-zinc-700 px-2 py-1 rounded-md outline-none text-sm"
            >
              Add Exercise
            </button>
          </div>
          <div className="flex flex-col gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Exercise Name"
              name="name"
              id="name"
              value={newExercise.name}
              className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
              onChange={(e) =>
                setNewExercise({ ...newExercise, name: e.target.value })
              }
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={newExercise.sets}
                placeholder="Sets"
                name="sets"
                id="sets"
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
                onChange={(e) =>
                  setNewExercise({ ...newExercise, sets: e.target.value })
                }
              />
              <input
                type="text"
                value={newExercise.reps}
                placeholder="Reps"
                name="reps"
                id="reps"
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
                onChange={(e) =>
                  setNewExercise({ ...newExercise, reps: e.target.value })
                }
              />
              <select
                name="rest"
                id="rest"
                value={newExercise.rest}
                onChange={(e) =>
                  setNewExercise({ ...newExercise, rest: e.target.value })
                }
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
              >
                <option value="" disabled>
                  Choose One
                </option>
                <option value="1-2 min">1-2 min</option>
              </select>
            </div>
          </div>
          {exercises.map((exercise, idx) => {
            const [name, sets, reps, rest] = JSON.parse(exercise);
            return (
              <div key={idx} className="flex gap-2">
                <div>{name}</div>
                <div>-</div>
                <div>{sets}</div>
                <div>-</div>
                <div>{reps}</div>
                <div>-</div>
                <div>{rest}</div>
              </div>
            );
          })}
          {state?.errors?.exercises && (
            <div className="text-red-500">{state.errors.exercises}</div>
          )}
        </div>
      </div>
      {state?.errors?.workoutId && (
        <div className="text-red-500">{state.errors.workoutId}</div>
      )}
      <button
        type="submit"
        className="mt-6 cursor-pointer outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md"
      >
        Submit
      </button>
      {state?.errors?.user && (
        <div className="text-red-500">{state.errors.user}</div>
      )}
    </form>
  );
};

export default CreateProgramForm;
