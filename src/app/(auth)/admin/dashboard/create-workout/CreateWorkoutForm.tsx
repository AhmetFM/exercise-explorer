"use client";
import React, { useContext, useEffect, useState } from "react";
import { createWorkout, getPlans } from "./actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { AdminContext } from "@/context/AdminContext";

const CreateWorkoutForm = () => {
  const [plans, setPlans] = useState<string[]>([]);
  const { user } = useContext(AdminContext);
  const [state, formAction] = useFormState(createWorkout, {
    errors: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      const plans = await getPlans();
      setPlans(plans.map((p) => p.slug));
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Workout created successfully", {
        style: { background: "#14532d", color: "white" },
      });
    }
  }, [state]);

  return (
    <div>
      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="title">
            Title &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="title"
            name="title"
            placeholder="Enter Plan Title"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="slug"
            name="slug"
            placeholder="/slug"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="shortTitle"
            name="shortTitle"
            placeholder="Short title"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="desc"
            name="desc"
            placeholder="Enter Plan desc"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="goal"
            name="goal"
            placeholder="Build Muscle"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="type"
            name="type"
            placeholder="Split"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="duration"
            name="duration"
            placeholder="12 Weeks"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="days"
            name="days"
            placeholder="5"
            type="text"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="img"
            name="img"
            placeholder="https://images.pexels.com/blabla"
            type="text"
          />
          <p className="text-sm text-gray-500">
            This is Image URL of this workout.
          </p>
          {state?.errors?.days && (
            <p className="text-sm text-red-500">{state?.errors.days}</p>
          )}
        </div>
        <div className="flex gap-4 items-center flex-col md:flex-row">
          <label htmlFor="selectPlan">
            Choose a Workout plan to attach this program
          </label>
          <select
            id="selectPlan"
            name="selectPlan"
            className="border px-3 py-2 rounded-md"
            defaultValue={""}
          >
            <option value="" disabled>
              Choose One
            </option>
            {plans.map((plan, idx) => (
              <option key={idx} value={plan}>
                {plan}
              </option>
            ))}
          </select>
          {state?.errors?.selectPlan && (
            <p className="text-sm text-red-500">{state?.errors.selectPlan}</p>
          )}
        </div>
        <button className="mt-6 cursor-pointer outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md">
          Submit
        </button>
        {state?.errors?.user && (
          <div className="text-red-500">{state.errors.user}</div>
        )}
      </form>
    </div>
  );
};

export default CreateWorkoutForm;
