"use server";

import { z } from "zod";

export const contactFormAction = (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const contactFormSchema = z.object({
    user_name: z.string().min(1, { message: "First name is required" }),
    user_surname: z.string().min(1, { message: "Last name is required" }),
    user_email: z.string().email({ message: "Must be a valid email" }),
    messageSend: z
      .string()
      .min(3, { message: "Message must be at least 3 characters" }),
  });

  const validated = contactFormSchema.safeParse(data);
  if (!validated.success) {
    return {
      message: "Invalid form data",
      errors: validated.error.flatten(),
    };
  }

  const { user_name, user_surname, user_email, messageSend } = validated.data;

  return {
    message: "success",
    user_name,
    user_surname,
    user_email,
    messageSend,
  };
};
