import { Repository } from "typeorm";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { TUserWithContactsSchema } from "../../interfaces/users.interfaces";

const retrieveSelfDataService = async (userId: number): Promise<User> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await usersRepo.findOne({
    where: { id: userId },
    relations: {
      contacts: true,
    },
    select: {
      id: true,
      username: true,
      email: true,
      full_name: true,
      phone_number: true,
      createdAt: true,
      updatedAt: true,
      contacts: true,
    },
  });

  return user!;
};

export { retrieveSelfDataService };
