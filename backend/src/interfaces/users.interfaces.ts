import { z } from "zod";
import {
  updateUserRequestSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
  userWithContactsSchema,
} from "../schemas/users.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
type TUserWithContactsSchema = z.infer<typeof userWithContactsSchema>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUpdateUserRequest,
  TUserWithContactsSchema,
};
