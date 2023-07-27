import { z } from "zod";
import {
  contactSchema,
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";

type TContact = z.infer<typeof contactSchema>;
type TCreateContactRequest = z.infer<typeof createContactSchema>;
type TUpdateContactRequest = z.infer<typeof updateContactSchema>;

export { TContact, TCreateContactRequest, TUpdateContactRequest };
