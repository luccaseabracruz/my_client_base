import React from "react";
import { StyledCard } from "./style";
import { IContact } from "../../providers/ContactProvider";
import { useContact } from "../../hooks/useContact";
import { api } from "../../services/api";

export interface IContactCardProps {
  contact: IContact;
  toggleModal: () => void;
}

export const ContactCard = ({ contact, toggleModal }: IContactCardProps) => {
  const { setSelectedContact, deleteContact } = useContact();

  const handleDeleteButton = () => {
    deleteContact(contact);
  };

  const handleUpdateButton = () => {
    setSelectedContact(contact);
    toggleModal();
  };

  return (
    <StyledCard>
      <h3>{contact.full_name}</h3>
      <p>E-mail: {contact.email}</p>
      <p>Phone: {contact.phone_number}</p>
      <div className="buttonsContainer">
        <button onClick={handleDeleteButton}>Delete</button>
        <button onClick={handleUpdateButton}>Update</button>
      </div>
    </StyledCard>
  );
};
