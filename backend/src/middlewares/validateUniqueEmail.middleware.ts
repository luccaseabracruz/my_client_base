import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError.error";

const validateUniqueEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body;
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({ email: email });

  if (user) {
    throw new AppError("This email has already been registered.", 409);
  }

  return next();
};

export default validateUniqueEmailMiddleware;
