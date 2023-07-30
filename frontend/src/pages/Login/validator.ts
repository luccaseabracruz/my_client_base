import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("E-mail must be valid.")
    .nonempty("E-mail is required."),
  password: z.string().nonempty("Password is required."),
});

export type TLoginData = z.infer<typeof loginSchema>;
