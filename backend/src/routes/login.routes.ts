import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { loginRequestSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateDataMiddleware(loginRequestSchema),
  createTokenController
);

export { loginRoutes };
