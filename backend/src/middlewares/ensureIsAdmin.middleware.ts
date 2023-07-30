import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError.error";

const ensureIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureIsAdminMiddleware;
