"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

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

export const createProgram = async (prevState: any, formData: FormData) => {
  const title = formData.get("title") as string;
  const exercises = JSON.parse(formData.get("exercises") as string);
  const workoutId = formData.get("workoutId") as string;

  const schema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    exercises: z.array(z.string()),
  });

  const validated = schema.safeParse({ title, exercises });

  const selectedWorkout = await prisma.workout.findUnique({
    where: {
      id: workoutId,
    },
  });

  if (!selectedWorkout) {
    return {
      errors: {
        workoutId: "Workout not found",
      },
    };
  }

  if (!validated.success) {
    const errors = validated.error?.issues.reduce(
      (acc: any, curr: any) => ({
        ...acc,
        [curr.path[0]]: curr.message,
      }),
      {}
    );
    console.log(errors);
    return {
      errors,
    };
  } else {
    const program = await prisma.day.create({
      data: {
        title,
        headers: ["Exercise", "Sets", "Reps", "Rest"],
        exercises,
        workoutId,
      },
    });

    return {
      message: "success",
    };
  }
};
