import WorkoutCard from "@/components/WorkoutCard";
import prisma from "@/lib/db";
import React from "react";

// type WorkoutProps = {
//   id: number;
//   slug: string;
//   title: string;
//   img: string;
//   description: string;
//   workouts: {
//     id: number;
//     title: string;
//     img: string;
//     description: string;
//   }[];
// }[];

export const metadata = {
  title: "Workout Plans",
  description:
    "Workout categories for you to choose from and start your journey",
};

const WorkoutPage = async () => {
  // const workouts: WorkoutProps = dummyData;
  const workouts = await prisma.plan.findMany({
    include: {
      workouts: true,
    },
  });

  return (
    <div className="flex flex-col items-center p-8">
      <span className="text-3xl mb-4 border-b">WORKOUT CATEGORIES</span>
      <p className="text-center max-w-2xl font-light text-sm">
        Choose a category that best suits the workout you&apos;re searching for.
        Once in the category, use the sort and filter options to find the right
        workout for your experience and goals.
      </p>
      {/* className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" */}
      <div className="flex flex-wrap gap-6 mt-8 justify-center md:mx-4 xl:mx-0">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
