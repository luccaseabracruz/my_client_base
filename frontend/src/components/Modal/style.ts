import { styled } from "styled-components";

export const ModalContainer = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .modalBox {
    background-color: var(--grey0);
    padding: 1rem;
    width: 100%;
    max-width: 40rem;
  }

  .modalBox form {
    display: flex;
    flex-direction: column;
  }

  .modalBox form > input {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
    background-color: var(--brand2);
    color: var(--grey0);
  }
`;
