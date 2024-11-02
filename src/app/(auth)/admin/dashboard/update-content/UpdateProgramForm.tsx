"use client";
import React, { useEffect, useState } from "react";
import { findProgramById, updateProgram } from "./actions";
import { Day } from "@prisma/client";
import Loading from "@/app/loading";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

import { TiDelete } from "react-icons/ti";

type TExercises = {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}[];

const UpdateProgramForm = ({
  programId,
  setIsSelectionDone,
}: {
  programId: string;
  setIsSelectionDone: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [program, setProgram] = useState<Day | null>(null);
  const [exercises, setExercises] = useState<TExercises | null>();

  const [state, formAction] = useFormState(updateProgram, null);

  //Fetching program on initial load.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findProgramById(programId);
        setProgram(data);
        setExercises(
          data?.exercises.map((e) => {
            const [name, sets, reps, rest] = JSON.parse(e);
            return {
              name,
              sets,
              reps,
              rest,
            };
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [programId]);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Plan Created Successfully!", {
        style: { background: "#14532d", color: "white" },
      });
      setExercises(null);
      setProgram(null);
      setIsSelectionDone(false);
    } else if (state?.message === "error") {
      toast.error("Failed to delete program. Please try again.");
    }
  }, [state, setIsSelectionDone]);

  const handleAddClick = () => {
    setExercises((prev) => [
      ...prev!,
      {
        name: "",
        sets: "",
        reps: "",
        rest: "1-2 min",
      },
    ]);
  };

  const handleDelete = (idx: number) => {
    const newExercises = exercises?.filter((_, index) => index !== idx);
    setExercises(newExercises);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = exercises?.map((exercise) => {
      return `["${exercise.name}", "${exercise.sets}", "${exercise.reps}", "${exercise.rest}"]`;
    });

    if (!values) {
      toast.error("Please check all fields");
      return;
    }

    if (values?.length! <= 2) {
      toast.error("At least two exercise needed!");
      return;
    }

    // setUpdatedExercises(values);
    const formData = new FormData(e.currentTarget);
    formData.append("id", programId);
    formData.append("exercises", JSON.stringify(values));
    formAction(formData);
  };

  if (!program) {
    return (
      <div className="flex items-center justify-center w-full h-[60vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {/* Form for updating program */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-xl" htmlFor="title">
          Title &#42;
        </label>
        <input
          className="border rounded-md border-zinc-700 px-4 py-1 outline-none focus-visible:border-zinc-400 transition-all duration-100 placeholder:text-gray-500"
          id="title"
          name="title"
          type="text"
          placeholder="Enter Your Title"
          defaultValue={program.title}
        />

        {exercises?.map((exercise, idx) => {
          return (
            <div
              key={idx}
              className="flex gap-2 w-full max-w-2xl flex-wrap items-center border-b pb-6 md:pb-2 dark:border-white/20"
            >
              <input
                className="flex-1 min-w-[100px] md:min-w-[120px] border px-2 py-1 rounded-md dark:border-white/20"
                defaultValue={exercise.name}
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[idx].name = e.target.value;
                  setExercises(newExercises);
                }}
              />
              <div>-</div>
              <input
                className=" min-w-[40px] max-w-[80px] border px-2 py-1 rounded-md dark:border-white/20"
                defaultValue={exercise.sets}
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[idx].sets = e.target.value;
                  setExercises(newExercises);
                }}
              />
              <div>-</div>
              <input
                className=" min-w-[40px] max-w-[80px] border px-2 py-1 rounded-md dark:border-white/20"
                defaultValue={exercise.reps}
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[idx].reps = e.target.value;
                  setExercises(newExercises);
                }}
              />
              <div>-</div>
              <select
                className=" min-w-[80px] max-w-[120px] border px-2 py-1 rounded-md dark:border-white/20"
                defaultValue=""
                onChange={(e) => {
                  const newExercises = [...exercises];
                  newExercises[idx].rest = e.target.value;
                  setExercises(newExercises);
                }}
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value={exercise.rest}>{exercise.rest}</option>
              </select>
              <button
                onClick={() => handleDelete(idx)}
                className="cursor-pointer border rounded-full dark:border-white/20"
              >
                <TiDelete size={26} />
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={handleAddClick}
          className="border border-zinc-700 px-2 py-1 rounded-md outline-none text-sm"
        >
          Add Exercise
        </button>
        <button
          type="submit"
          className="mt-6 cursor-pointer outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md"
        >
          Update
        </button>
        {/* {state?.errors?.user && (
        <div className="text-red-500">{state.errors.user}</div>
      )} */}
      </form>
    </div>
  );
};

export default UpdateProgramForm;
