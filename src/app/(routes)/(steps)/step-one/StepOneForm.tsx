"use client";

import { useFormState } from "react-dom";
import { stepOneFormAction } from "./actions";
import { useContext, useEffect } from "react";
import { WorkoutContext } from "@/context/createWorkoutContext";
import { redirect } from "next/navigation";

const initialState = {
  message: "",
  history: "",
  location: "",
};

const StepOneForm = () => {
  const [state, formAction] = useFormState(stepOneFormAction, initialState);
  const { setHistory, setLocation } = useContext(WorkoutContext);

  useEffect(() => {
    if (state.message === "Success") {
      setHistory(state.history);
      setLocation(state.location);
      redirect("/step-two");
    }
  }, [state, setHistory, setLocation]);

  return (
    <form
      action={formAction}
      className="flex items-center justify-center flex-col h-full select-none lg:mx-8"
    >
      <div className="lg:border p-20 flex flex-col gap-12 rounded-lg">
        <div className="flex flex-col gap-2 border-b pb-8">
          {state.message !== "Success" && (
            <p className="text-red-500">{state.message}</p>
          )}
          <label htmlFor="history">
            How long have you been consistently working out?
          </label>
          <select
            className="p-2 bg-zinc-200 dark:bg-zinc-700 rounded-md"
            name="history"
            id="history"
            required
            defaultValue={""}
          >
            <option disabled value="">
              Select One
            </option>
            <option value="new">Less than 3 months</option>
            <option value="three-months">3-6 months</option>
            <option value="six-months">6 months - 1 year</option>
            <option value="one-year">Over a year</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 border-b pb-8">
          <span>Do you prefer working out at a gym, at home, or outdoors?</span>
          <div className="flex gap-8 items-center">
            <div className="flex gap-1">
              <input
                type="radio"
                name="location"
                value="gym"
                id="gym"
                required
              />
              <label htmlFor="gym">Gym</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" name="location" value="home" id="home" />
              <label htmlFor="home">Home</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                name="location"
                value="outdoor"
                id="outdoor"
              />
              <label htmlFor="outdoor">Outdoor</label>
            </div>
          </div>
        </div>
        <button className="bg-zinc-700 dark:bg-black text-white p-2 rounded-md">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOneForm;
