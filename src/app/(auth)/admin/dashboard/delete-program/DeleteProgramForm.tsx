"use client";
import React, { useEffect, useState } from "react";
import { deleteProgram, getAllWorkouts, getWorkoutPrograms } from "./actions";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const DeleteProgramForm = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [workout, setWorkout] = useState<string | null>(null);

  const [programs, setPrograms] = useState<any[]>();
  const [selectedProgram, setSelectedProgram] = useState<any>();

  const [state, formAction] = useFormState(deleteProgram, undefined);

  //Fetching Workouts on initial load
  useEffect(() => {
    const fetchWorkoutsData = async () => {
      const workouts = await getAllWorkouts();
      setWorkouts(workouts);
    };
    fetchWorkoutsData().catch(console.error);
  }, []);

  //Fetching programs for selected workout
  useEffect(() => {
    if (workout) {
      const fetchWorkoutPrograms = async () => {
        const programs = await getWorkoutPrograms(workout);
        setPrograms(programs?.days.map((day) => day));
      };
      fetchWorkoutPrograms().catch(console.error);
    }
  }, [workout]);

  useEffect(() => {
    if (state?.message === "success") {
      toast.success("Program deleted successfully");
      setWorkout(null);
      setSelectedProgram(null);
      setPrograms(undefined);
    } else if (state?.message === "error") {
      toast.error("Failed to delete program. Please try again.");
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <label htmlFor="workouts" className="text-lg font-medium">
        Select which workout you want to delete a program from ?
      </label>
      <select
        className="border px-2 py-1 w-1/2"
        name="workouts"
        id="workouts"
        defaultValue=""
        onChange={(e) => setWorkout(e.target.value)}
      >
        <option value="" disabled>
          Select Workout
        </option>
        {workouts.map((workout) => (
          <option key={workout.id} value={workout.name}>
            {workout.slug}
          </option>
        ))}
      </select>

      {workout && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 ">
            <h2 className="text-lg font-medium">Selected Workout:</h2>
            <p className="underline underline-offset-2 italic">{workout}</p>
          </div>
          <label htmlFor="program">
            Select which program you want to delete
          </label>
          <select
            className="border px-2 py-1 w-1/2"
            name="program"
            id="program"
            defaultValue=""
            onChange={(e) => setSelectedProgram(e.target.value)}
          >
            <option value="" disabled>
              Select Program
            </option>
            {programs?.map((program, idx) => (
              <option key={idx} value={program.id}>
                {program.title}
              </option>
            ))}
          </select>
          {state?.errors?.programId && (
            <div className="text-red-500">{state.errors.programId}</div>
          )}
          {state?.errors?.error && (
            <div className="text-red-500">{state.errors.error}</div>
          )}
          <button
            type="submit"
            disabled={!selectedProgram}
            className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete Program
          </button>
          {state?.errors?.user && (
            <div className="text-red-500">{state.errors.user}</div>
          )}
        </div>
      )}
    </form>
  );
};

export default DeleteProgramForm;
