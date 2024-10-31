"use client";
import { getAllPlans, getAllPrograms, getAllWorkouts } from "@/lib/actions";
import prisma from "@/lib/db";
import React, { useEffect, useState } from "react";
import UpdatePlanForm from "./UpdatePlanForm";
import UpdateWorkoutForm from "./UpdateWorkoutForm";
import UpdateProgramForm from "./UpdateProgramForm";

enum ContentType {
  PLAN = "plan",
  WORKOUT = "workout",
  PROGRAM = "program",
}

const UpdateContentForm = () => {
  const [content, setContent] = useState<ContentType | null>(null);
  const [items, setItems] = useState<any[]>();
  const [selectedItem, setSelectedItem] = useState<string | null>();
  const [isSelectionDone, setIsSelectionDone] = useState<boolean>(false);

  useEffect(() => {
    //If content is plan
    if (content === ContentType.PLAN) {
      setSelectedItem(null);
      const fetchPlans = async () => {
        try {
          const plans = await getAllPlans();
          setItems(plans);
        } catch (error) {
          console.error("Error fetching plans:", error);
        }
      };
      fetchPlans();
    } else if (content === ContentType.WORKOUT) {
      setSelectedItem(null);

      const fetchWorkouts = async () => {
        try {
          const workouts = await getAllWorkouts();
          setItems(workouts);
        } catch (error) {
          console.error("Error fetching plans:", error);
        }
      };
      fetchWorkouts();
    } else if (content === ContentType.PROGRAM) {
      setSelectedItem(null);
      const fetchPrograms = async () => {
        try {
          const programs = await getAllPrograms();
          setItems(programs);
        } catch (error) {
          console.error("Error fetching programs:", error);
        }
      };
      fetchPrograms();
    } else {
      return;
    }
  }, [content]);

  useEffect(() => {
    if (!selectedItem) {
      setIsSelectionDone(false);
    }
  }, [selectedItem]);

  return (
    <div>
      {!isSelectionDone ? (
        <form
          onSubmit={() => setIsSelectionDone(true)}
          className="flex flex-col gap-4"
        >
          <label className="text-lg font-medium" htmlFor="content">
            Select the content you want to update
          </label>
          <select
            name="content"
            id="content"
            defaultValue=""
            className="border px-3 py-2 rounded-md w-full lg:w-1/2"
            onChange={(e) => {
              setContent(e.target.value as ContentType);
            }}
          >
            <option value="" disabled>
              Select Content
            </option>
            <option value="plan">Plan</option>
            <option value="workout">Workout</option>
            <option value="program">Program</option>
          </select>
          {/* If selected content is plan */}
          {content === ContentType.PLAN && (
            <div className="flex flex-col gap-4">
              <label className="text-lg font-medium" htmlFor="plan">
                Select the plan you want to update
              </label>
              <select
                name="plan"
                id="plan"
                defaultValue=""
                className="border px-3 py-2 rounded-md w-full lg:w-1/2"
                onChange={(e) => {
                  setSelectedItem(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Content
                </option>
                {items?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* If selected content is workout */}
          {content === ContentType.WORKOUT && (
            <div className="flex flex-col gap-4">
              <label className="text-lg font-medium" htmlFor="workout">
                Select the workout you want to update
              </label>
              <select
                name="workout"
                id="workout"
                defaultValue=""
                className="border px-3 py-2 rounded-md w-full lg:w-1/2"
                onChange={(e) => {
                  setSelectedItem(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Content
                </option>
                {items?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} - {item.Plan?.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* If selected content is plan */}
          {content === ContentType.PROGRAM && (
            <div className="flex flex-col gap-4">
              <label className="text-lg font-medium" htmlFor="program">
                Select the program you want to update
              </label>
              <select
                name="program"
                id="program"
                defaultValue=""
                className="border px-3 py-2 rounded-md w-full lg:w-1/2"
                onChange={(e) => {
                  setSelectedItem(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Content
                </option>
                {items?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} - {item.Workout?.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedItem && (
            <button
              type="submit"
              className="mt-6 outline-none duration-300 transition-colors border-zinc-500 border-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 py-2 w-full md:w-1/3 rounded-md
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Select
            </button>
          )}
        </form>
      ) : (
        <div>
          {/* Render the form based on the selected content type */}
          {/* TODO: Create suspense for loading */}
          {content === ContentType.PLAN && (
            <UpdatePlanForm
              planId={selectedItem!}
              setIsSelectionDone={setIsSelectionDone}
            />
          )}
          {content === ContentType.WORKOUT && (
            <UpdateWorkoutForm id={selectedItem!} />
          )}
          {content === ContentType.PROGRAM && (
            <UpdateProgramForm id={selectedItem!} />
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateContentForm;
