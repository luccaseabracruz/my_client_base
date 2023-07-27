import { Repository } from "typeorm";
import {
  TContact,
  TCreateContactRequest,
  TUpdateContactRequest,
} from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";

const updateContactService = async (
  contactData: Partial<TCreateContactRequest>,
  contactId: number
): Promise<Contact> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const oldContactData: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  const updatedContact = contactRepo.create({
    ...oldContactData,
    ...contactData,
  });
  await contactRepo.save(updatedContact);

  return updatedContact;
};

export { updateContactService };
