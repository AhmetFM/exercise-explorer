"use server";

import { getUserByToken } from "@/lib/data";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { z } from "zod";

//Finding content functions

export const findPlanById = async (id: string) => {
  const res = await prisma.plan.findUnique({
    where: {
      id,
    },
  });
  return res;
};

export const findWorkoutById = async (id: string) => {
  const res = await prisma.workout.findUnique({
    where: {
      id,
    },
  });
  return res;
};

export const findProgramById = async (id: string) => {
  const res = await prisma.day.findUnique({
    where: {
      id,
    },
  });
  return res;
};

//Updating content functions

export const updatePlan = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  const user = await getUserByToken(session?.userId);

  if (!user?.isAdmin) {
    return {
      errors: {
        user: "You are not authorized to create a workout plan",
      },
    };
  }

  const slug = formData.get("slug") as string;
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const img = formData.get("img") as string;

  const isSlugValid = await prisma.plan.findUnique({
    where: {
      slug: slug,
      NOT: {
        id: formData.get("id") as string,
      },
    },
  });

  if (isSlugValid) {
    return {
      errors: {
        slug: "Slug already exists",
      },
    };
  }

  const schema = z.object({
    slug: z
      .string({
        required_error: "Slug is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Slug must be at least 3 characters long ")
      .toLowerCase(),
    title: z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Title must be at least 3 characters long"),
    desc: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Description must be at least 4 characters long"),
    img: z.union([z.string().url().nullish(), z.literal("")]),
  });

  const validated = schema.safeParse({
    slug,
    title,
    desc,
    img,
  });
  //If validation failes return errors
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
    const plan = await prisma.plan.update({
      where: {
        id: formData.get("id") as string,
      },
      data: {
        slug: slug,
        title: title,
        desc: desc,
        img: img
          ? img
          : "https://images.pexels.com/photos/6740305/pexels-photo-6740305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    });
  }

  return {
    message: "success",
  };
};

export const updateWorkout = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  const user = await getUserByToken(session?.userId);

  if (!user?.isAdmin) {
    return {
      errors: {
        user: "You are not authorized to create a workout plan",
      },
    };
  }

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const desc = formData.get("desc") as string;
  const shortTitle = formData.get("shortTitle") as string;
  const goal = formData.get("goal") as string;
  const type = formData.get("type") as string;
  const duration = formData.get("duration") as string;
  const days = formData.get("days") as string;
  const img = formData.get("img") as string;

  //Checking for new slug is valid.
  const isSlugValid = await prisma.workout.findUnique({
    where: {
      slug: slug,
      NOT: {
        id: formData.get("id") as string,
      },
    },
  });

  if (isSlugValid) {
    return {
      errors: {
        slug: "Slug already exists",
      },
    };
  }

  const schema = z.object({
    slug: z
      .string({
        required_error: "Slug is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Slug must be at least 3 characters long ")
      .toLowerCase(),
    title: z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Title must be at least 3 characters long"),
    desc: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Description must be at least 4 characters long"),
    shortTitle: z
      .string({
        required_error: "Short title is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Short title must be at least 3 characters long"),
    goal: z
      .string({
        required_error: "Goal is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Goal must be at least 3 characters long"),
    type: z
      .string({
        required_error: "Type is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Type must be at least 3 characters long"),
    duration: z
      .string({
        required_error: "Duration is required",
        invalid_type_error: "Must be a string",
      })
      .min(3, "Duration must be at least 3 characters long"),
    days: z.string({
      required_error: "Days is required",
      invalid_type_error: "Must be a string",
    }),
    img: z.union([z.string().url().nullish(), z.literal("")]),
  });

  const validated = schema.safeParse({
    slug,
    title,
    desc,
    img,
    shortTitle,
    goal,
    type,
    duration,
    days,
  });

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
    const workout = await prisma.workout.update({
      where: {
        id: formData.get("id") as string,
      },
      data: {
        slug: slug,
        title: title,
        description: desc,
        img: img,
        shortTitle: shortTitle,
        goal: goal,
        type: type,
        duration: duration,
        daysPerWeek: days,
      },
    });
    return {
      message: "success",
    };
  }
};

export const updateProgram = async (prevState: any, formData: FormData) => {
  const session = await verifySession();
  const user = await getUserByToken(session?.userId);

  if (!user?.isAdmin) {
    return {
      errors: {
        user: "You are not authorized to create a workout plan",
      },
    };
  }

  const title = formData.get("title") as string;
  const exercises = JSON.parse(formData.get("exercises") as string);

  const schema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    exercises: z.array(z.string()),
  });

  //Getting the workoutId for update process
  const workout = await prisma.day.findUnique({
    where: {
      id: formData.get("id") as string,
    },
    select: {
      workoutId: true,
    },
  });

  const validated = schema.safeParse({ title, exercises });

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
    const program = await prisma.day.update({
      where: {
        id: formData.get("id") as string,
      },
      data: {
        title,
        headers: ["Exercise", "Sets", "Reps", "Rest"],
        exercises,
        workoutId: workout?.workoutId,
      },
    });

    return {
      message: "success",
    };
  }
};
