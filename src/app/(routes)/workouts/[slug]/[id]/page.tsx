import NotFound from "@/app/not-found";
import React from "react";
import SingleWorkoutSection from "./single-workout-section";
import prisma from "@/lib/db";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const singleWorkout = await prisma.workout.findUnique({
    where: {
      slug: params.id,
    },
  });

  if (!singleWorkout) return {};

  return {
    title: singleWorkout.title,
    description: singleWorkout.description,
  };
}

const SingleWorkoutPage = async ({ params }: { params: { id: string } }) => {
  const singleWorkout = await prisma.workout.findUnique({
    where: {
      slug: params.id,
    },
    select: {
      title: true,
      slug: true,
      img: true,
      description: true,
      goal: true,
      type: true,
      duration: true,
      daysPerWeek: true,
      shortTitle: true,
      days: true,
    },
  });

  if (!singleWorkout) return <NotFound />;

  return (
    <div className="flex flex-col items-center min-h-[50vh]">
      <SingleWorkoutSection singleWorkout={singleWorkout} />
    </div>
  );
};

export default SingleWorkoutPage;
