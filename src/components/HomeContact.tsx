"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const HomeContact = () => {
  const form = useRef(null);
  const [pending, setPending] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_surname: "",
    user_email: "",
    message: "",
  });

  //TODO: Validate this contact page

  const animateAndReset = () => {
    setPending(true);
    const timer = setTimeout(() => {
      setFormData({
        user_name: "",
        user_surname: "",
        user_email: "",
        message: "",
      });
      setPending(false);
      clearTimeout(timer);
    }, 3000);
  };

  const handleData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        "service_8z218r2",
        "template_oej3yyd",
        form.current,
        "8MqIEgRM_ajQosXb4"
      );
    }
    animateAndReset();
  };

  return (
    <div
      className="flex flex-col items-center justify-center mb-12 md:mb-6 lg:mb-2 container min-h-[75vh]"
      id="contact"
    >
      <h1 className="text-4xl font-bold mb-8 pb-6 border-b-2 min-w-[40%] text-center">
        Contact Us
      </h1>
      {pending ? (
        <h1 className="text-2xl font-bold mb-8 pb-6 border-b-2 min-w-[40%] text-center">
          Thank you for your message!
        </h1>
      ) : (
        <form
          ref={form}
          onSubmit={(e) => handleSubmit(e)}
          className="w-full max-w-lg"
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
                onChange={(e) => handleData(e)}
                value={formData.user_name}
              />
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
                onChange={(e) => handleData(e)}
                value={formData.user_surname}
              />
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
                onChange={(e) => handleData(e)}
                value={formData.user_email}
              />
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
                name="message"
                rows={5}
                placeholder="Your message..."
                onChange={(e) => handleData(e)}
                value={formData.message}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-zinc-300 border-zinc-600 hover:border-zinc-300 border-2 dark:bg-zinc-950  dark:border-white dark:hover:border-zinc-950 dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300">
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HomeContact;
