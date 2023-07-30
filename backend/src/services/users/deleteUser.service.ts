import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";

const deleteUserService = async (userId: any): Promise<void> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepo.findOneBy({ id: userId });

  await usersRepo.remove(user!);
};

export default deleteUserService;
