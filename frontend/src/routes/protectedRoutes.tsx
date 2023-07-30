import React from "react";
import { useUser } from "../hooks/useUser";
import { Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { loading } = useUser();

  return loading ? <h1>Loading....</h1> : <Outlet />;
};
