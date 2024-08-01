"use server";

// import { redirect } from "next/navigation";
import { z } from "zod";

export const stepOneFormAction = (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const stepOneSchema = z.object({
    history: z.enum(["new", "three-months", "six-months", "one-year"]),
    location: z.enum(["home", "gym", "outdoor"]),
  });

  const validated = stepOneSchema.safeParse(data);

  if (!validated.success) {
    return {
      message: "Please fill in all fields",
      history: prevState.history,
      location: prevState.location,
    };
  }

  return {
    message: "Success",
    history: validated.data.history,
    location: validated.data.location,
  };
};
