import { styled } from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: var(--brand1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 10%;
    font-size: 3rem;
    color: var(--grey0);
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--grey0);
    padding: 3rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 30rem;
  }

  form h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  form input {
    margin-bottom: 1rem;
  }

  form button {
    margin-bottom: 1.5rem;
    background-color: var(--brand2);
    color: var(--grey0);
    transition: 0.1s;
  }
  form button:hover {
    background-color: var(--brand1);
  }

  .navigateContainer {
    font-size: 0.8rem;
  }

  .navigateLink {
    transition: 0.05s;
    color: var(--brand2);
    cursor: pointer;
  }
  .navigateLink:hover {
    color: var(--brand1);
  }
`;
