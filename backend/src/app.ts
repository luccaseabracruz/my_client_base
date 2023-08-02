import "express-async-errors";
import express, { Application } from "express";
import { userRoutes } from "./routes/users.routes";
import handleErrors from "./errors/handleErrors.errors";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";
import "dotenv/config";

const app: Application = express();
app.use(express.json());

const viteUrl: string | undefined = process.env.VITE_URL;

if (!viteUrl) {
  throw new Error("Env var VITE_URL does not exists.");
}

app.use(
  cors({
    origin: viteUrl,
  })
);

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/users", contactsRoutes);

app.use(handleErrors);

export default app;
