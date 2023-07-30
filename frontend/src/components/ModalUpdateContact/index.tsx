import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContact } from "../../providers/ContactProvider";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { useContact } from "../../hooks/useContact";
import { Modal } from "../Modal";
import {
  TContactData,
  createContactSchema,
} from "../ModalCreateContact/validator";

interface IUpdateContactModalProps {
  toggleModal: () => void;
}

export const UpdateContactModal = ({
  toggleModal,
}: IUpdateContactModalProps) => {
  const { register, handleSubmit } = useForm<Partial<TContactData>>({
    resolver: zodResolver(createContactSchema.partial()),
  });

  const { user } = useUser();
  const { setContacts, selectedContact } = useContact();

  const updateContact = async (data: Partial<TContactData>) => {
    try {
      const res = await api.patch<IContact>(
        `/users/${user.id}/contacts/${selectedContact.id}`,
        data
      );
      setContacts((previousContacts) => {
        const contactsArray = previousContacts.filter(
          (contact) => contact.id !== res.data.id
        );
        return [...contactsArray, res.data];
      });
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit(updateContact)}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          defaultValue={selectedContact.full_name}
          {...register("full_name")}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          defaultValue={selectedContact.email}
          {...register("email")}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          defaultValue={selectedContact.phone_number}
          {...register("phone_number")}
        />

        <button type="submit">Register</button>
      </form>
    </Modal>
  );
};
