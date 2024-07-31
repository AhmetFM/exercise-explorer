"use client";
import { WorkoutContext } from "@/context/createWorkoutContext";
import Link from "next/link";
import React, { useCallback, useContext, useEffect, useState } from "react";
import model from "./actions";

const StepThree = () => {
  const [returnedText, setReturnedText] = useState("");
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { days, history, location, type } = useContext(WorkoutContext);

  const getResponse = useCallback(async () => {
    const prompt = `List a workout program for fitness history is ${history} and wanna do ${type} and you can do at ${location} and ${days} days in week using this JSON schema:
    {
      "workout": [
        {
          "day": "string",
          "exercises": [
            {
              "name": "string",
              "sets": "string",
              "reps": "string"
            }
          ]
        }
      ]
    }
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setReturnedText(text);
    console.log(text);
  }, [days, type, location, history]);

  useEffect(() => {
    if (days === "" && history === "" && location === "" && type === "") {
      setError(true);
    }

    if (!error) {
      setIsPending(true);
      getResponse();
      setIsPending(false);
    }
  }, [error, days, history, location, type, getResponse]);

  if (error) {
    return (
      <div className="flex-1 h-[70vh] flex items-center justify-center flex-col gap-2 overflow-hidden">
        <h1 className="text-2xl font-bold">Please fill all the fields</h1>
        <Link href="/step-one">
          <button className="px-3 py-2 border-2 rounded-full border-zinc-950 dark:border-white hover:border-zinc-200 dark:hover:border-zinc-900 duration-300">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div className="flex-1 h-[70vh] flex items-center justify-center flex-col gap-2 overflow-hidden">
          <p>{returnedText}</p>
        </div>
      )}
    </div>
  );
};

export default StepThree;
