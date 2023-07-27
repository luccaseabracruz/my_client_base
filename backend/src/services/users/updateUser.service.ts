import { Repository } from "typeorm";
import {
  TUpdateUserRequest,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/users.schemas";

const updateUserService = async (
  userData: Partial<TUserRequest>,
  userId: number
): Promise<TUserResponse> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);
  const oldUserData: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = usersRepository.create({
    ...oldUserData,
    ...userData,
  });

  await usersRepository.save(newUserData);

  const userResponse: TUserResponse = userResponseSchema.parse(newUserData);
  return userResponse;
};

export default updateUserService;
