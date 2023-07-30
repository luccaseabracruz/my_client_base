import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entities";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contacts.schemas";
import { TContact } from "../../interfaces/contacts.interfaces";

const retriveContactService = async (
  contactId: number,
  userId: number
): Promise<Contact> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact = await contactsRepo.findOne({
    where: { id: contactId },
    relations: {
      user: true,
    },
    select: {
      id: true,
      email: true,
      full_name: true,
      phone_number: true,
      user: { id: true, username: true },
    },
  });

  return contact!;
};

export { retriveContactService };
