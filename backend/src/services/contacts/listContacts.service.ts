import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { Contact } from "../../entities/contacts.entities";
import AppError from "../../errors/appError.error";

const listContactsService = async (userId: number): Promise<Contact[]> => {
  const constactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userContacts: Contact[] = await constactsRepo.find({
    where: {
      user: { id: userId },
    },
  });

  return userContacts;
};

export { listContactsService };
