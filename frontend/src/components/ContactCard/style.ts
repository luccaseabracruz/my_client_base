import { styled } from "styled-components";

export const StyledCard = styled.li`
  padding: 1rem;
  background-color: var(--grey100);
  border: 0.2rem solid var(--grey300);
  border-radius: 0.5rem;

  margin: 0.3rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.3rem;
  }

  .buttonsContainer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
