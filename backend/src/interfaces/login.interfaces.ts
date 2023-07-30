import { z } from "zod";
import { loginRequestSchema } from "../schemas/login.schemas";

type TLoginRequest = z.infer<typeof loginRequestSchema>;

export { TLoginRequest };
