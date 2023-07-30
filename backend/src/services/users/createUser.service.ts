import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userResponseSchema } from "../../schemas/users.schemas";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const usersRepo = AppDataSource.getRepository(User);
  const newUser: User = usersRepo.create(userData);
  await usersRepo.save(newUser);
  const userResponse: TUserResponse = userResponseSchema.parse(newUser);

  return userResponse;
};

export default createUserService;
