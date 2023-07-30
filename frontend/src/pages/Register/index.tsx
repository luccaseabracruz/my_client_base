import React from "react";
import { StyledMain } from "../Login/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { TRegisterData, registerSchema } from "./validator";

export const Register = () => {
  const { register, handleSubmit } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { registerUser } = useUser();

  const navigate = useNavigate();

  return (
    <StyledMain>
      <h1>My Customer Base</h1>
      <form onSubmit={handleSubmit(registerUser)}>
        <h2>Register</h2>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />

        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" {...register("full_name")} />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" {...register("phone_number")} />

        <button type="submit">Register</button>

        <p className="navigateContainer">
          Already have an account?{" "}
          <span className="navigateLink" onClick={() => navigate("/")}>
            Go to login
          </span>
        </p>
      </form>
    </StyledMain>
  );
};
