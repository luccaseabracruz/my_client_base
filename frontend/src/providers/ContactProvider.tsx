import React from "react";
import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useUser } from "../hooks/useUser";

export interface IContact {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  createdAt: string;
  updatedAt: string;
}

interface IDefaultProviderProps {
  children: ReactNode;
}

interface IContactContextValues {
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  selectedContact: IContact;
  setSelectedContact: React.Dispatch<React.SetStateAction<IContact>>;
  deleteContact: (contact: IContact) => void;
}

export const ContactContext = createContext({} as IContactContextValues);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [selectedContact, setSelectedContact] = useState<IContact>(
    {} as IContact
  );

  const { user } = useUser();

  const deleteContact = (contact: IContact) => {
    try {
      api.delete(`/users/${user.id}/contacts/${contact.id}`);
      setContacts((previousContacts) =>
        previousContacts.filter(
          (currentContact) => currentContact.id !== contact.id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        selectedContact,
        setSelectedContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
