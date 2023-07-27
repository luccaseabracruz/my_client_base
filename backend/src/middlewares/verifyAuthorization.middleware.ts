import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError.error";

const verifyAuthorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const isAdmin: boolean = res.locals.admin;
  if (isAdmin) {
    return next();
  }

  const userId: number = res.locals.userId;
  const selectedUserId: number = parseInt(req.params.id);

  if (userId !== selectedUserId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default verifyAuthorizationMiddleware;
