import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureIdExistsMiddelware from "../middlewares/ensureIdExists.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import verifyAuthorizationMiddleware from "../middlewares/verifyAuthorization.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";
import verifyContactAuthorizationMiddleware from "../middlewares/verifyContactAuthorization.middleware";
import ensureContactIdExistsMiddelware from "../middlewares/ensureContactIdExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "/:id/contacts",
  ensureIdExistsMiddelware,
  validateDataMiddleware(createContactSchema),
  validateTokenMiddleware,
  createContactController
);
contactsRoutes.get(
  "/:id/contacts",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  listContactsController
);
contactsRoutes.get(
  "/:id/contacts/:contactId",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  ensureContactIdExistsMiddelware,
  verifyContactAuthorizationMiddleware,
  retrieveContactController
);
contactsRoutes.patch(
  "/:id/contacts/:contactId",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  ensureContactIdExistsMiddelware,
  verifyContactAuthorizationMiddleware,
  validateDataMiddleware(updateContactSchema),
  updateContactController
);
contactsRoutes.delete(
  "/:id/contacts/:contactId",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  ensureContactIdExistsMiddelware,
  verifyContactAuthorizationMiddleware,
  deleteContactController
);

export { contactsRoutes };
