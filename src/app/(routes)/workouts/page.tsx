import LoadingWorkouts from "@/components/loading/LoadingWorkouts";
import WorkoutCardsList from "@/components/workouts/WorkoutCardsList";
import React, { Suspense } from "react";

export const metadata = {
  title: "Workout Plans",
  description:
    "Workout categories for you to choose from and start your journey",
};

export const revalidate = 3600; // invalidate every hour

const WorkoutPage = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <span className="text-3xl mb-4 border-b">WORKOUT CATEGORIES</span>
      <p className="text-center max-w-2xl font-light text-sm">
        Choose a category that best suits the workout you&apos;re searching for.
        Once in the category, use the sort and filter options to find the right
        workout for your experience and goals.
      </p>
      <Suspense fallback={<LoadingWorkouts />}>
        <WorkoutCardsList />
      </Suspense>
    </div>
  );
};

export default WorkoutPage;
