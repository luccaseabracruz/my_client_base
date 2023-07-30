import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await contactsRepo.findOneBy({
    id: contactId,
  });
  await contactsRepo.remove(contact!);
};

export { deleteContactService };
