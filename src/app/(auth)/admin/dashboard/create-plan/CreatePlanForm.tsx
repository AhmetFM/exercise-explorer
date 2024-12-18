"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { createPlan } from "./actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const CreatePlanForm = () => {
  const [state, formAction] = useFormState(createPlan, undefined);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Plan Created Successfully!", {
        style: { background: "#14532d", color: "white" },
      });
      formRef.current?.reset();
      setImagePreview(null);
      scrollTo({ top: 0, behavior: "smooth" });
    } else if (state?.message === "error") {
      toast.error("Something went wrong!", {
        style: { background: "#7f1d1d", color: "white" },
      });
    }
  }, [state]);

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value.trim();
    if (isValidUrl(url)) {
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div>
      {/* Form For Creating Plan */}
      <form ref={formRef} action={formAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xl" htmlFor="planTitle">
            Title &#42;
          </label>
          <input
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
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
            className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
            id="planImg"
            name="img"
            placeholder="https://images.pexels.com/..."
            type="url"
            onChange={handleImageUrlChange}
          />
          <p className="text-sm text-gray-500">
            This is image of this workout plan. You can also upload image from
            pexels.
          </p>
          {imagePreview && (
            <div className="mt-2">
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-full h-auto max-h-48 object-contain"
                onError={() => setImagePreview(null)}
              />
            </div>
          )}
          {state?.errors?.img && (
            <p className="text-sm text-red-500">{state?.errors.img}</p>
          )}
        </div>
        <button className="mt-6 cursor-pointer outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md">
          Submit
        </button>
        {state?.errors?.user && (
          <p className="text-sm text-red-500">{state?.errors.user}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePlanForm;
