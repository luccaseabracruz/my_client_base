import React from "react";
import { useForm } from "react-hook-form";
import { TContactData, createContactSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContact } from "../../providers/ContactProvider";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { useContact } from "../../hooks/useContact";
import { Modal } from "../Modal";

interface ICreateContactModalProps {
  toggleModal: () => void;
}

export const CreateContactModal = ({
  toggleModal,
}: ICreateContactModalProps) => {
  const { register, handleSubmit } = useForm<TContactData>({
    resolver: zodResolver(createContactSchema),
  });

  const { user } = useUser();
  const { setContacts } = useContact();

  const createContact = async (data: TContactData) => {
    try {
      const res = await api.post<IContact>(`/users/${user.id}/contacts`, data);
      setContacts((previousContacts) => [res.data, ...previousContacts]);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit(createContact)}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" {...register("full_name")} />

        <label htmlFor="email">E-mail:</label>
        <input type="text" id="email" {...register("email")} />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" {...register("phone_number")} />

        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};
