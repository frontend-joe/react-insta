import styled, { css } from "styled-components";
import { useState } from "react";

const StyledWrapper = styled.div``;

const StyledFab = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  position: relative;
  z-index: 2;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fd4475;
  color: #f7f7f7;
  transition: all 0.125s;

  & > span {
    font-size: 30px;
  }

  ${(p) => p.isOpen && "transform: rotate(45deg)"};
`;

const menuOpenStyles = css`
  visibility: visible;
  opacity: 1;
  transform: rotate(0);
`;

const StyledMenu = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 64px;
  left: 0;
  width: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transform: rotate(-10deg);
  transform-origin: 50% 100%;
  transition: all 0.3s;

  ${(p) => p.isOpen && menuOpenStyles};
`;

const StyledMenuButton = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
  border-radius: 50%;
  background: red;

  &:nth-child(1) {
    background: #29b589;
  }

  &:nth-child(2) {
    background: #446afc;
  }

  &:nth-child(3) {
    background: #8d44fc;
  }

  & > span {
    color: #f7f7f7;
    font-size: 20px;
  }
`;

const Wrapper = ({ className }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledWrapper className={className}>
      <StyledFab>
        <StyledButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          <span class="uil uil-plus"></span>
        </StyledButton>
        <StyledMenu isOpen={isOpen}>
          <StyledMenuButton>
            <span class="uil uil-triangle"></span>
          </StyledMenuButton>
          <StyledMenuButton>
            <span class="uil uil-square"></span>
          </StyledMenuButton>
          <StyledMenuButton>
            <span class="uil uil-circle"></span>
          </StyledMenuButton>
        </StyledMenu>
      </StyledFab>
    </StyledWrapper>
  );
};

export default Wrapper;
