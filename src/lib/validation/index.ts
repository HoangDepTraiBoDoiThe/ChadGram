import { z } from "zod";

export const userSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "too short" })
    .max(50, { message: "too long" }),
  password: z
    .string()
    .min(9, { message: "Password must be at least 9 characters." }),
  email: z.string(),
});
