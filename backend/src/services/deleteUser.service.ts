import { Repository } from "typeorm";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError.error";

const deleteUserService = async (userId: any): Promise<void> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepo.findOneBy({ id: userId });

  if (user) {
    await usersRepo.remove(user);
  }
};

export default deleteUserService;
