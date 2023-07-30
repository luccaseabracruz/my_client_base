import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().nonempty("Username is required."),
  email: z.string().email().nonempty("E-mail is required."),
  password: z.string().nonempty("Password is required."),
  full_name: z.string().nonempty("Full Name is required."),
  phone_number: z.string().nonempty("Phone Number is required."),
});

export type TRegisterData = z.infer<typeof registerSchema>;
