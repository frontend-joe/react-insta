import styled, { css } from "styled-components";

import { useState } from "react";

import { rgba } from "polished";

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #8f44fd;
  color: #f7f7f7;
  display: grid;
  place-items: center;
  width: 10rem;
  height: 3.5rem;
  font-size: 1rem;
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
  visibility: visible;
  opacity: 1;
  transform: scale(1) translate(-50%, -50%);
`;

const StyledModal = styled.div`
  position: absolute;
  z-index: 51;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(-50%, -43%);
  transform-origin: 0% 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 22rem;
  border-radius: 1rem;
  background: #2a282f;
  visibility: hidden;
  opacity: 0;

  ${(p) => p.isVisible && modalVisibleStyles};

  transition: all 0.35s;
`;

const StyledIcon = styled.span`
  font-size: 80px;
  color: #5abda3;
  margin-bottom: 1rem;
`;

const StyledModalTitle = styled.div`
  margin-bottom: 4px;
  font-size: 28px;
  color: ${rgba("white", 0.96)};
`;

const StyledModalSubtitle = styled.div`
  margin-bottom: 2rem;
  font-size: 14px;

  color: ${rgba("white", 0.66)};
`;

const StyledModalButton = styled.button`
  background: white;
  display: grid;
  place-items: center;
  width: 10rem;
  height: 3.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
`;

const Wrapper = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setOpen(!isOpen)}>Open Modal</StyledButton>
      <StyledOverlay onClick={() => setOpen(false)} isVisible={isOpen} />
      <StyledModal isVisible={isOpen}>
        <StyledIcon className="material-icons-outlined">
          check_circle
        </StyledIcon>
        <StyledModalTitle>Good Job!</StyledModalTitle>
        <StyledModalSubtitle>
          Click the button below to dismiss.
        </StyledModalSubtitle>
        <StyledModalButton onClick={() => setOpen(false)}>
          Dismiss
        </StyledModalButton>
      </StyledModal>
    </>
  );
};

export default Wrapper;
