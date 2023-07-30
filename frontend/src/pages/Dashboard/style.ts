import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--grey100);
  width: 100%;
  max-width: 100vw;
  height: 92%;

  section {
    margin-top: 2rem;
    width: 100%;
    max-width: 70rem;
    background-color: var(--grey0);
    box-sizing: border-box;
    border-radius: 0.5rem;
  }

  .infoAndEditBtn {
    padding: 1rem;
  }

  section.myProfile h2 {
    font-size: 1.6rem;
    color: var(--brand2);
  }

  section.myProfile p {
    margin-bottom: 0.5rem;
  }

  section.contactsSection {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .emptyBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100%;
  }

  .titleAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }

  .titleAndButton h2 {
    font-size: 1.6rem;
    color: var(--brand2);
  }

  .cardsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
`;
