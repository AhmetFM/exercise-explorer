"use client";
import React, { useEffect, useState } from "react";
import { findWorkout, getPlansWithWorkouts } from "./actions";

type TPlans = {
  slug: string;
  workouts: {
    slug: string;
  }[];
};

const CreateProgramForm = () => {
  const [isSelectionDone, setIsSelectionDone] = useState(false);
  const [workout, setWorkout] = useState<string>("");

  return (
    <div>
      {isSelectionDone ? (
        <AddProgramForm workout={workout} />
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

  const handleClick = () => {
    setIsSelectionDone(true);
    setWorkout(
      plans
        .find((plan) => plan.slug === selectedPlan)
        ?.workouts.find((workout) => workout.slug === selectedWorkout)
    );
  };
  return (
    <form className="flex flex-col gap-4">
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
        disabled={!selectedWorkout}
        className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleClick}
      >
        Select Workout
      </button>
    </form>
  );
};

const AddProgramForm = ({ workout }: { workout: string }) => {
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

  const [data, setData] = useState<TData>(null);

  useEffect(() => {
    if (!workout) return;

    const fetchWorkoutData = async () => {
      const res = await findWorkout(workout);
      setData(res);
      console.log(res);
    };
    fetchWorkoutData().catch(console.error);
  }, [workout]);

  if (workout == "") return <div>Try again</div>;

  const handleClickExercise = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <form
      //action={formAction}
      className="flex flex-col gap-4"
    >
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
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center justify-between">
            <label className="text-xl" htmlFor="exercise">
              New Exercise
            </label>
            <button
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
              className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Sets"
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
              />
              <input
                type="text"
                placeholder="Reps"
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
              />

              <select
                name="rest"
                id="rest"
                defaultValue=""
                className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700 min-w-28 w-full"
              >
                <option value="" disabled>
                  Choose One
                </option>
                <option value="1-2_min">1-2 min</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default CreateProgramForm;
