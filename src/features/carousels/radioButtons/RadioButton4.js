import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledRadioButton = styled.span`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
`;

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0;
    transform: scale(1.75);
  }
`;

const StyledRadioPulse = styled.span`
  position: absolute;
  display: none;
  top: -11px;
  left: -11px;
  z-index: 0;
  opacity: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #8f44fd;
  animation: ${pulse} 0.5s linear;
`;

const StyledRadioButtonInner = styled.span`
  display: block;
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: #8f44fd;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transition: all 0.35s;
`;

const StyledRadioLabel = styled.span`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.66);
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledRadioButton} ${StyledRadioButtonInner} {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  &:checked ~ ${StyledRadioPulse} {
    display: block;
  }

  &:checked ~ ${StyledRadioButton} {
    border-color: #8f44fd;
  }

  &:checked ~ ${StyledRadioLabel} {
    color: rgba(255, 255, 255, 0.96);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioPulse />
        <StyledRadioButton>
          <StyledRadioButtonInner />
        </StyledRadioButton>
        <StyledRadioLabel>Dark</StyledRadioLabel>
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioPulse />
        <StyledRadioButton>
          <StyledRadioButtonInner />
        </StyledRadioButton>
        <StyledRadioLabel>Light</StyledRadioLabel>
      </StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
