import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const useUser = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
