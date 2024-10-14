"use client";
import { handleSubmit } from "@/app/(auth)/admin/login/actions";
import { AdminContext } from "@/context/AdminContext";
import { redirect } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

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
    <form
      action={formAction}
      className="border border-black/25 dark:border-white/25 flex flex-col px-10 py-12 items-center justify-center max-w-[500px] max-h-[500px] mx-auto gap-6 rounded-xl bg-zinc-100 dark:bg-zinc-900"
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
          className="w-full border px-3 py-2 border-black/25 dark:border-white/25 rounded-md "
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
  );
};

export default LoginForm;
