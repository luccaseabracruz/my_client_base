import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { IRegisterUser, IUser } from "../../providers/UserProvider";
import { TUpdateUserSchema, updateUserSchema } from "./validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IUpdateUserModalProps {
  toggleModal: () => void;
}

export const UpdateUserModal = ({ toggleModal }: IUpdateUserModalProps) => {
  const { register, handleSubmit } = useForm<TUpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
  });

  const { user, setUser } = useUser();

  const updateUser = async (data: Partial<IRegisterUser>) => {
    try {
      const res = await api.patch<IUser>(`/users/${user.id}`, data);
      setUser(res.data);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          defaultValue={user.username}
          {...register("username")}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          defaultValue={user.email}
          {...register("email")}
        />

        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          defaultValue={user.full_name}
          {...register("full_name")}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          defaultValue={user.phone_number}
          {...register("phone_number")}
        />

        <button type="submit">Update</button>
      </form>
    </Modal>
  );
};
