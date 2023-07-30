import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../hooks/useUser";
import { StyledMain } from "./style";
import { useNavigate } from "react-router-dom";
import { TLoginData, loginSchema } from "./validator";

export const Login = () => {
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useUser();

  const navigate = useNavigate();

  return (
    <StyledMain>
      <h1>My Customer Base</h1>
      <form onSubmit={handleSubmit(signIn)}>
        <h2>Login</h2>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Sign In</button>

        <p className="navigateContainer">
          Are you new?{" "}
          <span className="navigateLink" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>
      </form>
    </StyledMain>
  );
};
