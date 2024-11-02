"use client";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { findWorkoutById, updateWorkout } from "./actions";
import { Workout } from "@prisma/client";
import Loading from "@/app/loading";
import toast from "react-hot-toast";

const UpdateWorkoutForm = ({
  workoutId,
  setIsSelectionDone,
}: {
  workoutId: string;
  setIsSelectionDone: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [state, formAction] = useFormState(updateWorkout, undefined);
  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const workout = await findWorkoutById(workoutId);
        setWorkout(workout);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkout();
  }, [workoutId]);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Plan Created Successfully!", {
        style: { background: "#14532d", color: "white" },
      });
      setWorkout(null);
      setIsSelectionDone(false);
    } else if (state?.message === "error") {
      toast.error("Failed to delete program. Please try again.");
    }
  }, [state, setIsSelectionDone]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", workoutId);
    formAction(formData);
  };

  if (!workout) {
    return (
      <div className="flex items-center justify-center w-full h-[60vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {/* Form For Updating Workout */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="title">
            Title &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="title"
            name="title"
            placeholder="Enter Plan Title"
            type="text"
            defaultValue={workout?.title}
          />
          <p className="text-sm text-gray-500">
            This is title of this workout.
          </p>
          {state?.errors?.title && (
            <p className="text-sm text-red-500">{state?.errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="slug">
            Slug &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="slug"
            name="slug"
            placeholder="/slug"
            type="text"
            defaultValue={workout?.slug}
          />
          <p className="text-sm text-gray-500">This is slug of this workout.</p>
          {state?.errors?.slug && (
            <p className="text-sm text-red-500">{state?.errors.slug}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="shortTitle">
            Short Title &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="shortTitle"
            name="shortTitle"
            placeholder="Short title"
            type="text"
            defaultValue={workout?.shortTitle}
          />
          <p className="text-sm text-gray-500">
            This is short title of this workout.
          </p>
          {state?.errors?.shortTitle && (
            <p className="text-sm text-red-500">{state?.errors.shortTitle}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="desc">
            Desc &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="desc"
            name="desc"
            placeholder="Enter Plan desc"
            type="text"
            defaultValue={workout?.description}
          />
          <p className="text-sm text-gray-500">
            This is description of this workout.
          </p>
          {state?.errors?.desc && (
            <p className="text-sm text-red-500">{state?.errors.desc}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="goal">
            Goal &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="goal"
            name="goal"
            placeholder="Build Muscle"
            type="text"
            defaultValue={workout?.goal}
          />
          <p className="text-sm text-gray-500">
            This is the Goal of this workout plan.
          </p>
          {state?.errors?.goal && (
            <p className="text-sm text-red-500">{state?.errors.goal}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="type">
            Type &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="type"
            name="type"
            placeholder="Split"
            type="text"
            defaultValue={workout?.type}
          />
          <p className="text-sm text-gray-500">
            This is type of this workout plan.
          </p>
          {state?.errors?.type && (
            <p className="text-sm text-red-500">{state?.errors.type}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="duration">
            Duration &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="duration"
            name="duration"
            placeholder="12 Weeks"
            type="text"
            defaultValue={workout?.duration}
          />
          <p className="text-sm text-gray-500">
            This is title of this workout plan.
          </p>
          {state?.errors?.duration && (
            <p className="text-sm text-red-500">{state?.errors.duration}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="days">
            Days Per Week &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="days"
            name="days"
            placeholder="5"
            type="text"
            defaultValue={workout?.daysPerWeek}
          />
          <p className="text-sm text-gray-500">
            This is days per week of this workout plan.
          </p>
          {state?.errors?.days && (
            <p className="text-sm text-red-500">{state?.errors.days}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="days">
            Image
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="img"
            name="img"
            placeholder="https://images.pexels.com/blabla"
            type="text"
            defaultValue={workout?.img}
          />
          <p className="text-sm text-gray-500">
            This is Image URL of this workout.
          </p>
          {state?.errors?.days && (
            <p className="text-sm text-red-500">{state?.errors.days}</p>
          )}
        </div>
        <button className="mt-6 cursor-pointer outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md">
          Update
        </button>
        {state?.errors?.user && (
          <div className="text-red-500">{state.errors.user}</div>
        )}
      </form>
    </div>
  );
};

export default UpdateWorkoutForm;
