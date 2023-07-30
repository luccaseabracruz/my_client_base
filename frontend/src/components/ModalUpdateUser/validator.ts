import { z } from "zod";

export const updateUserSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  full_name: z.string().optional(),
  phone_number: z.string().optional(),
});

export type TUpdateUserSchema = z.infer<typeof updateUserSchema>;
