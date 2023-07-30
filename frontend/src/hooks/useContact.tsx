import { useContext } from "react";
import { ContactContext } from "../providers/ContactProvider";

export const useContact = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};
