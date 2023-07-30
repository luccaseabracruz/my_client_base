import { NextFunction, Request, Response } from "express";
import AppError from "./appError.error";
import { ZodError } from "zod";

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.flatten().fieldErrors,
    });
  }

  console.log(err);
  return res.status(500).json({
    message: "Internal server Error.",
  });
};

export default handleErrors;
