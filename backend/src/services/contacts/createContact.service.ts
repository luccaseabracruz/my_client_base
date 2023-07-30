import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/user.entities";
import {
  TContact,
  TCreateContactRequest,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  contactData: TCreateContactRequest,
  userId: number
): Promise<Contact> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await usersRepo.findOneBy({ id: userId });

  const contactsRepo = AppDataSource.getRepository(Contact);
  const newContact: Contact = contactsRepo.create({
    ...contactData,
    user: user!,
  });
  await contactsRepo.save(newContact);

  const selectedContact: Contact | null = await contactsRepo.findOneBy({
    id: newContact.id,
  });

  return selectedContact!;
};

export { createContactService };
