import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string().max(120),
  email: z.string().max(70).email(),
  phone_number: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.number(),
});

const createContactSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  userId: true,
});

const updateContactSchema = createContactSchema.partial();

export { contactSchema, createContactSchema, updateContactSchema };
