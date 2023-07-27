import { z } from "zod";
import {
  updateUserRequestSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/users.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;

export { TUser, TUserRequest, TUserResponse, TUpdateUserRequest };
