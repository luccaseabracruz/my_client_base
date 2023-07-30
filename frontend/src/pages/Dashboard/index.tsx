import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactCard } from "../../components/ContactCard";
import { useUser } from "../../hooks/useUser";
import { IUserWithContact } from "../../providers/UserProvider";
import { DashBoardHeader } from "../../components/DashBoardHeader";
import { StyledMain } from "./style";
import { useContact } from "../../hooks/useContact";
import { CreateContactModal } from "../../components/ModalCreateContact";
import { UpdateContactModal } from "../../components/ModalUpdateContact";
import { UpdateUserModal } from "../../components/ModalUpdateUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [isUpdateUserOpenModel, setIsUpdateUserOpenModel] = useState(false);
  const [isUpdateContactOpenModel, setIsUpdateContactOpenModel] =
    useState(false);
  const [isCreateContactOpenModel, setIsCreateContactOpenModel] =
    useState(false);

  const { user, setUser, loading, setLoading, signOut } = useUser();
  const { contacts, setContacts } = useContact();

  const toggleUpdateUserModal = () =>
    setIsUpdateUserOpenModel(!isUpdateUserOpenModel);
  const toggleUpdateContactModal = () =>
    setIsUpdateContactOpenModel(!isUpdateContactOpenModel);
  const toggleCreateContactModal = () =>
    setIsCreateContactOpenModel(!isCreateContactOpenModel);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const resUser = await api.get<IUserWithContact>("/users/self");
        const { contacts: userContacts, ...rest } = resUser.data;
        setUser({ ...rest });
        setContacts(userContacts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.warning("Invalid Token");
        localStorage.removeItem("@my-customer-base:token");
        setTimeout(() => navigate("/"), 1000);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <DashBoardHeader signOut={signOut} />
      <StyledMain>
        {isCreateContactOpenModel && (
          <CreateContactModal toggleModal={toggleCreateContactModal} />
        )}
        {isUpdateContactOpenModel && (
          <UpdateContactModal toggleModal={toggleUpdateContactModal} />
        )}
        {isUpdateUserOpenModel && (
          <UpdateUserModal toggleModal={toggleUpdateUserModal} />
        )}
        <section className="myProfile">
          <div className="titleAndButton">
            <h2>My Profile</h2>
            <button onClick={toggleUpdateUserModal}>Update</button>
          </div>

          <div className="infoAndEditBtn">
            <div className="userInfo">
              <p className="userFullName">Name: {user.full_name}</p>
              <p className="username">Username: {user.username}</p>
              <p className="email">E-mail: {user.email}</p>
              <p className="phoneNumber">Phone Number: {user.phone_number}</p>
            </div>
          </div>
        </section>
        <section className="contactsSection">
          <div className="titleAndButton">
            <h2>My Contacts</h2>
            <button type="button" onClick={toggleCreateContactModal}>
              + Register New Contact
            </button>
          </div>

          <ul className="cardsContainer">
            {contacts.length < 1 ? (
              <div className="emptyBox">
                <p>Your contacts list is empty</p>
              </div>
            ) : (
              contacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  toggleModal={toggleUpdateContactModal}
                />
              ))
            )}
          </ul>
        </section>
      </StyledMain>
    </>
  );
};
