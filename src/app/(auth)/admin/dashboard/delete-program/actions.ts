"use server";
import { getUserByToken } from "@/lib/data";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { z } from "zod";

export const getAllWorkouts = async () => {
  const workouts = await prisma.workout.findMany();
  return workouts;
};

export const getWorkoutPrograms = async (slug: string) => {
  const workout = await prisma.workout.findUnique({
    where: {
      slug,
    },
    include: {
      days: true,
    },
  });
  return workout;
};

export const deleteProgram = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  const user = await getUserByToken(session?.userId);
  //Checking user is admin
  if (!user?.isAdmin) {
    return {
      errors: {
        user: "You are not authorized to create a program",
      },
    };
  }

  const programId = formData.get("program") as string;

  const schema = z.object({
    programId: z.string(),
  });

  const validated = schema.safeParse({ programId });

  //Checking is selected id is correct
  const selectedProgram = await prisma.day.findUnique({
    where: {
      id: programId,
    },
  });

  if (!selectedProgram) {
    return {
      errors: {
        programId: "Program not found",
      },
    };
  }

  try {
    if (!validated.success) {
      const errors = validated.error?.issues.reduce(
        (acc: any, curr: any) => ({
          ...acc,
          [curr.path[0]]: curr.message,
        }),
        {}
      );
      return {
        errors,
      };
    } else {
      const program = await prisma.day.delete({
        where: {
          id: programId,
        },
      });

      return {
        message: "success",
      };
    }
  } catch (err) {
    return {
      errors: {
        error: "Something went wrong",
      },
    };
  }
};
