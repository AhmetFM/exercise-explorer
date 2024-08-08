import { AdminUsers } from "@/lib/data";
import { z } from "zod";

export const handleSubmit = (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const LoginSchema = z.object({
    username: z.string().min(4, "Username must be at least 4 characters long"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
  });

  const validated = LoginSchema.safeParse(data);
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
    const user = AdminUsers.find((user) => user.username === data.username);
    if (user && user.password === data.password) {
      return {
        success: true,
        user,
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
