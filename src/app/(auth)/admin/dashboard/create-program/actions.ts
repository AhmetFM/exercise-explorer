"use server";

import prisma from "@/lib/db";

export const getPlansWithWorkouts = async () => {
  const workouts = await prisma.plan.findMany({
    include: {
      workouts: true,
    },
  });
  return workouts;
};

export const findWorkout = async (workoutSlug: any) => {
  const workout = await prisma.workout.findUnique({
    where: {
      slug: workoutSlug.slug,
    },
    include: {
      days: true,
    },
  });
  return workout;
};
