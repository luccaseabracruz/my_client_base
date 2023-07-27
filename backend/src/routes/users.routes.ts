import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";
import validateUniqueEmailMiddleware from "../middlewares/validateUniqueEmail.middleware";
import {
  updateUserRequestSchema,
  userRequestSchema,
} from "../schemas/users.schemas";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import validateUniqueUsername from "../middlewares/validateUniqueUsername.middleware";
import ensureIdExistsMiddelware from "../middlewares/ensureIdExists.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import verifyAuthorizationMiddleware from "../middlewares/verifyAuthorization.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userRequestSchema),
  validateUniqueUsername,
  validateUniqueEmailMiddleware,
  createUserController
);
userRoutes.get(
  "",
  validateTokenMiddleware,
  ensureIsAdminMiddleware,
  listUsersController
);
userRoutes.get(
  "/:id",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  retrieveUserController
);
userRoutes.patch(
  "/:id",
  ensureIdExistsMiddelware,
  validateDataMiddleware(updateUserRequestSchema),
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureIdExistsMiddelware,
  validateTokenMiddleware,
  verifyAuthorizationMiddleware,
  deleteUserController
);

export { userRoutes };
