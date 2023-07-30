import React, { useEffect, useState } from "react";
import { ReactNode, createContext } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IContact } from "./ContactProvider";
import { TRegisterData } from "../pages/Register/validator";
import { toast } from "react-toastify";

interface IDefaultProviderProps {
  children: ReactNode;
}
export interface IUser {
  id: number;
  username: string;
  email: string;
  full_name: string;
  phone_number: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserWithContact extends IUser {
  contacts: IContact[];
}
interface ILoginResponse {
  token: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  full_name: string;
  phone_number: string;
}

interface IUserContextValues {
  registerUser: (registerData: IRegisterUser) => Promise<void>;
  signIn: (loginData: TLoginData) => Promise<void>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signOut: () => void;
}

export const UserContext = createContext({} as IUserContextValues);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@my-customer-base:token");
    if (token) {
      api.defaults.headers.common.Authorization = "Bearer " + token;
    }
    setLoading(false);
  }, []);

  const registerUser = async (registerData: TRegisterData) => {
    try {
      const res = await api.post<IUser>("/users", registerData);
      toast.success("User successfully registered.");
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.log(error);
      toast.warning(error.response.data.message);
    }
  };

  const signIn = async (loginData: TLoginData) => {
    try {
      const res = await api.post<ILoginResponse>("/login", loginData);
      const { token } = res.data;
      api.defaults.headers.common.Authorization = "Bearer " + token;
      localStorage.setItem("@my-customer-base:token", token);

      setLoading(false);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.warning(error.response.data.message);
    }
  };

  const signOut = (): void => {
    localStorage.removeItem("@my-customer-base:token");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        signIn,
        user,
        setUser,
        setLoading,
        loading,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
