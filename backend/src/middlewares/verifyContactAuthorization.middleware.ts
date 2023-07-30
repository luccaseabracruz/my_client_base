import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError.error";
import { Repository } from "typeorm";
import { Contact } from "../entities/contacts.entities";
import { AppDataSource } from "../data-source";

const verifyContactAuthorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;
  if (isAdmin) {
    return next();
  }

  const userId: number = res.locals.userId;
  const contactId: number = parseInt(req.params.contactId);

  const constactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userContacts: Contact | null = await constactsRepo.findOne({
    where: {
      id: contactId,
      user: { id: userId },
    },
  });

  if (!userContacts) {
    throw new AppError("Insufficient permission", 409);
  }

  res.locals.contactId = contactId;

  return next();
};

export default verifyContactAuthorizationMiddleware;
