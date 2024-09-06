"use client";
import React, { useEffect } from "react";
import { createPlan } from "./actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const WorkoutForm = () => {
  const [state, formAction] = useFormState(createPlan, undefined);
  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Plan Created Successfully!", {
        style: { background: "#14532d", color: "white" },
      });
    }
  }, [state]);
  return (
    <div>
      {/* Form For Creating Plan */}
      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="planTitle">
            Title &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="planTitle"
            name="title"
            placeholder="Enter Plan Title"
            type="text"
          />
          <p className="text-sm text-gray-500">
            This is title of this workout plan.
          </p>
          {state?.errors?.title && (
            <p className="text-sm text-red-500">{state?.errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="planTitle">
            Slug &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="planSlug"
            name="slug"
            placeholder="Enter Plan Slug"
            type="text"
          />
          <p className="text-sm text-gray-500">
            This is Slug of this workout plan.
          </p>
          {state?.errors?.slug && (
            <p className="text-sm text-red-500">{state?.errors.slug}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="planTitle">
            Desc &#42;
          </label>
          <textarea
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="planDesc"
            name="desc"
            placeholder="Enter Plan Desc"
          />
          <p className="text-sm text-gray-500">
            This is description of this workout plan.
          </p>
          {state?.errors?.desc && (
            <p className="text-sm text-red-500">{state?.errors.desc}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="planTitle">
            Image
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-700"
            id="planImg"
            name="img"
            placeholder="Enter Plan Image URL"
            type="url"
          />
          <p className="text-sm text-gray-500">
            This is Image of this workout plan.
          </p>
          {state?.errors?.img && (
            <p className="text-sm text-red-500">{state?.errors.img}</p>
          )}
        </div>
        <button className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;