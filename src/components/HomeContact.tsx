"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormState } from "react-dom";
import { contactFormAction } from "@/lib/actions";

const initialState = {
  message: "",
  user_name: "",
  user_surname: "",
  user_email: "",
  messageSend: "",
};

const HomeContact = () => {
  const form = useRef<any>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [state, formAction] = useFormState(contactFormAction, initialState);

  useEffect(() => {
    const animateAndReset = () => {
      setPending(true);
      const timer = setTimeout(() => {
        setPending(false);
        clearTimeout(timer);
      }, 4000);
    };

    if (state.message === "success") {
      if (form.current) {
        emailjs.sendForm(
          "service_8z218r2",
          "template_oej3yyd",
          form.current,
          "8MqIEgRM_ajQosXb4"
        );
        form.current.reset();
      }
      animateAndReset();
    }
  }, [state]);

  return (
    <div
      className="flex flex-col items-center justify-center mb-12 md:mb-6 lg:mb-2 container relative min-h-[75vh]"
      id="contact"
    >
      <h1 className="text-4xl font-bold mb-8 pb-6 border-b-2 min-w-[40%] text-center">
        Contact Us
      </h1>
      <h3
        className={`text-2xl font-bold mb-8 pb-6 border-b-2 min-w-[40%] text-center h-[45vh] flex items-center justify-center absolute ${
          pending ? "animate-fade-in-and-out" : "hidden"
        }`}
      >
        Thank you for your message!
      </h3>
      <form
        ref={form}
        action={formAction}
        className={`"w-full max-w-lg ${
          pending ? "animate-fade-out-and-in" : ""
        } `}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="user_name"
              placeholder="John"
            />
            {state.errors?.fieldErrors.user_name && (
              <p className="text-red-500 text-xs italic">
                {state.errors.fieldErrors.user_name[0]}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="user_surname"
              type="text"
              placeholder="Doe"
            />
            {state.errors?.fieldErrors.user_surname && (
              <p className="text-red-500 text-xs italic">
                {state.errors.fieldErrors.user_surname[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              name="user_email"
              type="email"
              placeholder="********@*****.com"
            />
            {state.errors?.fieldErrors.user_email && (
              <p className="text-red-500 text-xs italic">
                {state.errors.fieldErrors.user_email[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 dark:text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-y max-h-[300px] min-h-[120px]"
              id="grid-message"
              name="messageSend"
              rows={5}
              placeholder="Your message..."
            />
            {state.errors?.fieldErrors.messageSend && (
              <p className="text-red-500 text-xs italic">
                {state.errors.fieldErrors.messageSend[0]}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-zinc-300 border-zinc-600 hover:border-zinc-300 border-2 dark:bg-zinc-950  dark:border-white dark:hover:border-zinc-950 dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeContact;
