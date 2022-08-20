import { useState } from "react";
import styled, { keyframes } from "styled-components";

import react from "assets/react.png";

const heightOfMenu = "130px";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 400px;
  background: #100f10;
  border-radius: 20px;
`;

const StyledBurger = styled.button`
  position: absolute;
  z-index: 21;
  top: 10px;
  left: 10px;
  background: transparent;
  border: 0;
  color: ${(p) => (p.isOpen ? "#45424d" : "white")};
  cursor: pointer;
`;

const StyledBurgerIcon = styled.span`
  font-size: 36px;
`;

const StyledMenu = styled.div`
  height: ${heightOfMenu};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
`;

const StyledMenuButton = styled.button`
  width: 150px;
  height: 34px;
  border: 0;
  color: #45424d;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #8f44fd;
  }
`;

const StyledContent = styled.div`
  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
`;

const StyledBody = styled.div`
  padding: 8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledImage = styled.img`
  width: 100px;
  margin-bottom: 10px;
  animation: ${rotate} 15s linear infinite;
`;

const StyledText = styled.div`
  color: white;
  text-align: center;
  padding: 0 1rem;
  font-size: 0.875rem;
`;

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledWrapper>
      <StyledBurger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <StyledBurgerIcon className="material-icons">
          {isOpen ? "menu_open" : "menu"}
        </StyledBurgerIcon>
      </StyledBurger>
      <StyledContent isOpen={isOpen}>
        <StyledMenu>
          <StyledMenuButton>Home</StyledMenuButton>
          <StyledMenuButton>About</StyledMenuButton>
          <StyledMenuButton>Contact</StyledMenuButton>
        </StyledMenu>
        <StyledBody>
          <StyledImage src={react} />
          <StyledText>Edit src/App.js to save and reload.</StyledText>
        </StyledBody>
      </StyledContent>
    </StyledWrapper>
  );
};

export default App;
