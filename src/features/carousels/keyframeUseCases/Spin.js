import styled, { keyframes } from "styled-components";

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 4.5rem;
  background: #8f44fd;
  color: #f7f7f7;
  border-radius: 0.5rem;
  cursor: not-allowed;
`;

const StyledText = styled.span`
  font-size: 1.325rem;
  margin-right: 1rem;
`;

const spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled.span`
  font-size: 1.5rem;

  &::before {
    animation: ${spin} 1.5s infinite linear;
  }
`;

const Wrapper = () => {
  return (
    <StyledButton>
      <StyledText>Reloading</StyledText>
      <StyledIcon className="uil uil-sync" />
    </StyledButton>
  );
};

export default Wrapper;
