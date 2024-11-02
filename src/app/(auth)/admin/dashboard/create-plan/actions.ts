"use server";
import { getUserByToken } from "@/lib/data";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createPlan(prevState: any, formData: FormData) {
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
    const plan = await prisma.plan.create({
      data: {
        slug: slug,
        title: title,
        desc: desc,
        img: img
          ? img
          : "https://images.pexels.com/photos/6740305/pexels-photo-6740305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    });

    return {
      message: "success",
    };
  }
}
