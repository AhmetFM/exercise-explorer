"use server";
import { getUserByToken } from "@/lib/data";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { z } from "zod";

export const getPlans = async () => {
  const plans = await prisma.plan.findMany({
    select: {
      slug: true,
    },
  });
  return plans;
};

export async function createWorkout(prevState: any, formData: FormData) {
  const session = await verifySession();
  const user = await getUserByToken(session?.userId);

  if (!user?.isAdmin) {
    return {
      errors: {
        user: "You are not authorized to create a plan",
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
  const selectPlan = formData.get("selectPlan") as string;
  //Checking for other slugs because slug needs to be unique
  const isSlugValid = await prisma.workout.findUnique({
    where: {
      slug: slug,
    },
  });
  if (isSlugValid) {
    return {
      errors: {
        slug: "Slug already exists",
      },
    };
  }

  if (selectPlan === null) {
    return {
      errors: {
        selectPlan: "Please select a plan",
      },
    };
  }

  const selectedPlanId = await prisma.plan.findUnique({
    where: {
      slug: selectPlan,
    },
    select: {
      id: true,
    },
  });

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
    selectPlan: z.string({
      required_error: "Selection is required",
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
    selectPlan,
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
    if (selectedPlanId === null) {
      return {
        errors: {
          selectPlan: "Please select a plan",
        },
      };
    }
    const workout = await prisma.workout.create({
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
        planId: selectedPlanId.id,
      },
    });
    revalidatePath("/admin/dashboard/create-workout");
    return {
      message: "success",
    };
  }
}
