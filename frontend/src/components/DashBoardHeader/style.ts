import { styled } from "styled-components";

export const StyledHeaderContainer = styled.header`
  /* padding: 0.8rem; */
  background-color: var(--brand1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 70rem;
  }

  .container h1 {
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--grey0);
  }
`;
