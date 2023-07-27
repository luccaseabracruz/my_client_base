import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/appError.error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    email: loginData.email,
  });
  if (!user) {
    throw new AppError("Invalid email", 401);
  }

  const passwordValidation = await compare(loginData.password, user.password);
  if (!passwordValidation) {
    throw new AppError("Invalid password", 401);
  }

  const token = jwt.sign(
    {
      email: user.email,
      admin: user.isAdmin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user.id),
    }
  );

  return token;
};

export default createTokenService;
