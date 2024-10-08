"use client";
import { WorkoutContext } from "@/context/createWorkoutContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import model from "./actions";
import jsPDF, { AcroFormField } from "jspdf";
import autoTable from "jspdf-autotable";

type DataType = {
  day: string;
  exercises: {
    name: string;
    sets: string;
    reps: string;
  }[];
}[];

const StepThree = () => {
  const [returnedText, setReturnedText] = useState<string>();
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { days, history, location, type } = useContext(WorkoutContext);

  useEffect(() => {
    const getResponse = async () => {
      if (days === "" && history === "" && location === "" && type === "") {
        setError(true);
        return;
      }

      setIsPending(true);

      const prompt = `
      Generate a workout plan based on the following criteria:
      Days: ${days}
      History: ${history}
      Location: ${location}
      Type: ${type}
      Format the output as a JSON object with the following structure:
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
      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setReturnedText(text);
      } catch (err) {
        console.log(error);
      }
      setIsPending(false);
    };

    getResponse();
  }, [days, history, location, type, error]);

  useEffect(() => {
    if (returnedText) {
      const jsonData = JSON.parse(returnedText);
      setData(jsonData.workout);
    }
  }, [returnedText]);

  const handleDownload = () => {
    if (!data) return;

    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Workout Plan", 14, 15);
    doc.setFontSize(12);

    let yOffset = 25;

    data.forEach((day, index) => {
      doc.text(day.day, 14, yOffset);
      yOffset += 10;

      const tableData = day.exercises.map((exercise) => [
        exercise.name,
        exercise.sets,
        exercise.reps,
      ]);

      autoTable(doc, {
        head: [["Exercise", "Sets", "Reps"]],
        body: tableData,
        startY: yOffset,
      });

      yOffset = (doc as any).lastAutoTable.finalY + 15;

      if (yOffset > 270 && index < data.length - 1) {
        doc.addPage();
        yOffset = 15;
      }
    });

    doc.save("workout-plan.pdf");
  };

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
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-272px)]">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-zinc-900 dark:fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Creating Your Workout Plan</span>
          <span>Creating Your Workout Plan</span>
        </div>
      ) : (
        <div className="flex-1 flex-col w-full flex gap-12 flex-wrap items-center justify-center h-auto my-10">
          <div className="flex flex-wrap items-center justify-center">
            {data?.map((day, i) => (
              <div
                className="flex max-w-[320px] min-w-[300px] min-h-[220px] flex-col mx-3 lg:mx-8"
                key={i}
              >
                <h1 className="text-2xl font-bold text-center mb-1 border-b">
                  {day.day}
                </h1>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Exercise</th>
                      <th>Sets</th>
                      <th>Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.exercises.map((exercise, j) => (
                      <tr key={j}>
                        <td className="text-left text-wrap">{exercise.name}</td>
                        <td className="text-center">{exercise.sets}</td>
                        <td className="text-center min-w-20 max-w-32 text-wrap">
                          {exercise.reps}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleDownload}
              className="px-3 py-2 border-2 rounded-full border-zinc-950 dark:border-white hover:border-zinc-200 dark:hover:border-zinc-900 duration-300"
            >
              Download Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepThree;
