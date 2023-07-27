import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError.error";

const ensureIdExistsMiddelware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: number = parseInt(req.params.id);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await usersRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default ensureIdExistsMiddelware;
