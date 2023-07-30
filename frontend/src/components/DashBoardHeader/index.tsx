import React from "react";
import { StyledHeaderContainer } from "./style";

interface IDashBoardHeaderProps {
  signOut: () => void;
}

export const DashBoardHeader = ({ signOut }: IDashBoardHeaderProps) => {
  return (
    <StyledHeaderContainer>
      <div className="container">
        <h1>My Customer Base</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    </StyledHeaderContainer>
  );
};
