import { z } from "zod";
import { contactSchema } from "./contacts.schemas";

const userSchema = z.object({
  id: z.number(),
  username: z.string().max(70),
  email: z.string().email().max(70),
  password: z.string().max(120),
  full_name: z.string().max(120),
  phone_number: z.string(),
  isAdmin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userRequestSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const userResponseSchema = userSchema.omit({ password: true });

const updateUserRequestSchema = userRequestSchema.partial();

const userWithContactsSchema = userResponseSchema.extend({
  contacts: z.array(contactSchema),
});

export {
  userSchema,
  userRequestSchema,
  userResponseSchema,
  updateUserRequestSchema,
  userWithContactsSchema,
};
