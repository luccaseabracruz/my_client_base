import { z } from "zod";

export const createContactSchema = z.object({
  full_name: z.string().max(70).nonempty("Full name is required."),
  email: z.string().nonempty("E-mail is required."),
  phone_number: z.string().nonempty("Phone number is required."),
});

export type TContactData = z.infer<typeof createContactSchema>;
