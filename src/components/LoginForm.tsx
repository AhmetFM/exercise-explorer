"use client";
import { handleSubmit } from "@/app/(auth)/admin/login/actions";
import { AdminContext } from "@/context/AdminContext";
import { redirect } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { IoIosInformationCircleOutline } from "react-icons/io";

const initialState = {
  errors: {},
};

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full disabled:cursor-not-allowed disabled:opacity-40 bg-zinc-300 px-3 py-2 rounded-md font-medium dark:bg-zinc-800 border-2 border-zinc-950/75 hover:border-zinc-300 dark:border-white/75 dark:hover:border-zinc-800 duration-300"
    >
      {pending ? "Loading..." : "Login"}
    </button>
  );
};

const LoginForm = () => {
  const [state, formAction] = useFormState(handleSubmit, initialState);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const { setUser } = useContext(AdminContext);

  // useEffect(() => {
  //   if (state.success) {
  //     setUser((prev: any) => ({
  //       username: state.user.username,
  //       password: state.user.password,
  //       isAdmin: state.user.isAdmin,
  //     }));
  //     redirect("/admin/dashboard");
  //   }
  // }, [setUser, state]);

  return (
    <div className="border border-black/25 dark:border-white/25 px-10 pt-12 pb-4 max-w-[500px] max-h-[500px] mx-auto rounded-xl bg-zinc-100 dark:bg-zinc-900">
      <form
        action={formAction}
        className=" flex flex-col items-center justify-center gap-6 mb-6"
      >
        <h1
          className="text-xl border-b pb-4 px-3 font-medium
      "
        >
          Login Admin Dashboard
        </h1>
        <div>
          <input
            className="w-full border px-3 py-2 border-black/25 dark:border-white/25 rounded-md "
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          {state?.errors?.username && (
            <p className="text-red-500 text-sm max-w-52">
              {state.errors.username}
            </p>
          )}
        </div>
        <div>
          <input
            className="w-full border px-3 py-2 border-black/25 dark:border-white/25 rounded-md"
            type="password"
            name="password"
            autoComplete="on"
            placeholder="Password"
            required
          />
          {state?.errors?.password && (
            <p className="text-red-500 text-sm max-w-52">
              {state.errors.password}
            </p>
          )}
        </div>
        <Button />
      </form>
      <button
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
        onClick={() => setShowPopover(!showPopover)}
        className="relative self-start w-8 h-8 rounded-full duration-300 transition-all"
      >
        <IoIosInformationCircleOutline className="w-full h-full" />
        {showPopover && (
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 ml-2 p-2 w-40 bg-zinc-800 border border-gray-200 rounded shadow-lg duration-300 transition-all">
            <p className="text-sm text-white text-start">username : test</p>
            <p className="text-sm text-white text-start">password : test123</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default LoginForm;
