"use server";

// import { redirect } from "next/navigation";
import { z } from "zod";

export const stepTwoFormAction = (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const stepTwoSchema = z.object({
    type: z.enum([
      "muscle-building",
      "full-body",
      "strength",
      "for-sport",
      "bodyweight",
    ]),
    days: z.enum([
      "two-day",
      "three-or-four-day",
      "five-or-six-day",
      "every-day",
    ]),
  });

  const validated = stepTwoSchema.safeParse(data);

  if (!validated.success) {
    return {
      message: "Please fill in all fields",
      type: prevState.type,
      days: prevState.days,
    };
  }

  return {
    message: "Success",
    type: validated.data.type,
    days: validated.data.days,
  };
};
