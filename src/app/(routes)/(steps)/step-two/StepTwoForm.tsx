import React from "react";

const StepTwoForm = () => {
  return (
    <form className="flex items-center justify-center flex-col h-full select-none lg:mx-8">
      <div className="lg:border p-20 flex flex-col gap-12 rounded-lg">
        <div className="flex flex-col gap-2 border-b pb-8">
          <label htmlFor="type">
            Which types of exercise do you enjoy the most?
          </label>
          <select
            className="p-2 bg-zinc-200 dark:bg-zinc-700 rounded-md"
            name="type"
            id="type"
            required
            defaultValue={""}
          >
            <option disabled value="">
              Select One
            </option>
            <option value="muscle">Muscle building</option>
            <option value="full">Full Body</option>
            <option value="strength">Increase Strength</option>
            <option value="sport">Sport Perfomance</option>
            <option value="bodyweight">Bodyweight</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 border-b pb-8">
          <label htmlFor="days">
            How many days a week do you typically exercise?
          </label>
          <select
            className="p-2 bg-zinc-200 dark:bg-zinc-700 rounded-md dark:text-white"
            name="days"
            id="days"
            required
            defaultValue={""}
          >
            <option disabled value="">
              Select One
            </option>
            <option value="newbie">1-2 days</option>
            <option value="beginner">3-4 days</option>
            <option value="intermediate">5-6 days</option>
            <option value="advanced">Every day</option>
          </select>
        </div>
        <button className="bg-zinc-700 dark:bg-black text-white p-2 rounded-md">
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwoForm;
