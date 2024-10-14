"use server";
import { getUser } from "@/lib/data";
import { createSession } from "@/lib/session";
import { z } from "zod";

export const handleSubmit = async (prevState: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const LoginSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters long"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
  });

  const validated = LoginSchema.safeParse({ username, password });
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
    const user = await getUser(username);
    if (user && user.password === password) {
      await createSession(user.id);
      return {
        success: true,
        user: {
          username: user.username,
          password: user.password,
          isAdmin: user.isAdmin,
        },
      };
    } else {
      return {
        errors: {
          username: "Invalid username or password",
        },
      };
    }
  }
};
