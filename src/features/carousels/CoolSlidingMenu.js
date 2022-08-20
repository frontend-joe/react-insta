import { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 600px;
  height: 750px;
`;

const StyledBurger = styled.button`
  position: absolute;
  z-index: 21;
  top: 12px;
  right: 24px;
  background: transparent;
  border: 0;
  color: ${(p) => (p.isOpen ? "black" : "white")};
  cursor: pointer;
  transition: color 0.45s;
`;

const StyledBurgerIcon = styled.span`
  font-size: 48px;
`;

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transform: translateY(${(p) => (p.isOpen ? 0 : "-100%")});
  transition: transform 0.45s;
`;

const StyledMenuButton = styled.button`
  width: 150px;
  border: 0;
  color: #45424d;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #8f44fd;
  }
`;

const Wrapper = ({ setOpen, isOpen }) => {
  return (
    <StyledWrapper>
      <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <StyledBurgerIcon className="material-icons">
          {isOpen ? "menu_open" : "menu"}
        </StyledBurgerIcon>
      </StyledBurger>
      <StyledMenu isOpen={isOpen}>
        <StyledMenuButton index={1}>Home</StyledMenuButton>
        <StyledMenuButton index={2}>Mentor</StyledMenuButton>
        <StyledMenuButton index={3}>Course</StyledMenuButton>
      </StyledMenu>
    </StyledWrapper>
  );
};

export default Wrapper;
