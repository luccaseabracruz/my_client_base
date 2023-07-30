import { Request, Response } from "express";
import {
  TContact,
  TCreateContactRequest,
  TUpdateContactRequest,
} from "../interfaces/contacts.interfaces";
import { Contact } from "../entities/contacts.entities";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { retriveContactService } from "../services/contacts/retriveContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const contactData: TCreateContactRequest = req.body;
  const contact: Contact = await createContactService(contactData, userId);

  return res.status(201).json(contact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const contacts: Contact[] = await listContactsService(userId);

  return res.status(200).json(contacts);
};

const retrieveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = res.locals.contactId;
  const userId: number = res.locals.userId;
  const contact: Contact = await retriveContactService(contactId, userId);
  return res.status(200).json(contact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: Partial<TCreateContactRequest> = req.body;
  const contactId: number = res.locals.contactId;
  const updatedContact: Contact = await updateContactService(
    contactData,
    contactId
  );
  return res.status(201).json(updatedContact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = res.locals.contactId;
  await deleteContactService(contactId);
  return res.status(204).json("controler de delete contact funcionando");
};

export {
  createContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
};
