import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError.error";
import { Contact } from "../entities/contacts.entities";

const ensureContactIdExistsMiddelware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactId: number = parseInt(req.params.contactId);
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await contactsRepo.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export default ensureContactIdExistsMiddelware;
