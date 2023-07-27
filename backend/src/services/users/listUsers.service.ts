import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<TUserResponse[]> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await usersRepo.find();
  const listUsersResponse: TUserResponse[] = users.map((user) => {
    return userResponseSchema.parse(user);
  });

  return listUsersResponse;
};

export default listUsersService;
