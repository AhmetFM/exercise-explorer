"use server";

// import { redirect } from "next/navigation";
import { z } from "zod";

export const stepTwoFormAction = (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const stepTwoSchema = z.object({
    type: z.enum(["muscle", "full", "strength", "sport", "bodyweight"]),
    days: z.enum(["low", "normal", "hard", "extreme"]),
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
