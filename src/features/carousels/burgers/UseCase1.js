import styled, { css, keyframes } from "styled-components";

import { useState } from "react";

import { rgba } from "polished";

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  color: #f7f7f7;
  display: grid;
  place-items: center;
  width: 10rem;
  height: 3.5rem;
  font-size: 3rem;
  border-radius: 0.5rem;
`;

const overlayVisibleStyles = css`
  visibility: visible;
  opacity: 1;
`;

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);

  ${(p) => p.isVisible && overlayVisibleStyles};

  transition: all 0.35s;
`;

const modalVisibleStyles = css`
  transform: translateX(0);
`;

const StyledMenu = styled.div`
  position: absolute;
  z-index: 51;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #2a282f;

  ${(p) => p.isVisible && modalVisibleStyles};

  transition: all 0.45s;
`;

const closeAnimation = keyframes`
  0%,
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledMenuClose = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #f7f7f7;
  font-size: 4rem;
  animation: ${(p) => (p.isOpen ? closeAnimation : null)} 1s;
`;

const StyledMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const menuItem1Animation = keyframes`
  0%,
  40% {
    transform: translateY(8px);
    opacity: 0;
  }
  45%,
  100% {
    opacity: 1;
  }
`;

const menuItem2Animation = keyframes`
  0%,
  50% {
    transform: translateY(8px);
    opacity: 0;
  }
  55%,
  100% {
    opacity: 1;
  }
`;

const menuItem3Animation = keyframes`
  0%,
  60% {
    transform: translateY(8px);
    opacity: 0;
  }
  65%,
  100% {
    opacity: 1;
  }
`;

const menuItem4Animation = keyframes`
  0%,
  70% {
    transform: translateY(8px);
    opacity: 0;
  }
  75%,
  100% {
    opacity: 1;
  }
`;

const StyledMenuItem = styled.button`
  background: transparent;
  color: #f7f7f7;
  font-size: 1.875rem;
  opacity: 1;
  transform: 50% 0%;
  animation-duration: 1.375s;

  &:nth-child(1) {
    animation-name: ${(p) => (p.isOpen ? menuItem1Animation : null)};
  }

  &:nth-child(2) {
    animation-name: ${(p) => (p.isOpen ? menuItem2Animation : null)};
  }

  &:nth-child(3) {
    animation-name: ${(p) => (p.isOpen ? menuItem3Animation : null)};
  }

  &:nth-child(4) {
    animation-name: ${(p) => (p.isOpen ? menuItem4Animation : null)};
  }
`;

const Wrapper = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setOpen(!isOpen)}>
        <span className="uil uil-bars"></span>
      </StyledButton>
      <StyledOverlay onClick={() => setOpen(false)} isVisible={isOpen} />
      <StyledMenu isVisible={isOpen}>
        <StyledMenuClose
          onClick={() => setOpen(false)}
          isOpen={isOpen}
          className="uil uil-times"
        />
        <StyledMenuItems>
          <StyledMenuItem isOpen={isOpen}>Home</StyledMenuItem>
          <StyledMenuItem isOpen={isOpen}>About</StyledMenuItem>
          <StyledMenuItem isOpen={isOpen}>Services</StyledMenuItem>
          <StyledMenuItem isOpen={isOpen}>Contact</StyledMenuItem>
        </StyledMenuItems>
      </StyledMenu>
    </>
  );
};

export default Wrapper;
