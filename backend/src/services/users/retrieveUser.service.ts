import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError.error";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";

const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await usersRepo.findOneBy({ id: userId });
  const userResponse: TUserResponse = userResponseSchema.parse(user);

  return userResponse;
};

export default retrieveUserService;
