import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  color: white;
  font-size: 3rem;
`;

const blink = keyframes`
  49.99% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const StyledBlinker = styled.span`
  margin-left: 2px;
  animation: ${blink} 1s infinite linear;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      67
      <StyledBlinker>'</StyledBlinker>
    </StyledWrapper>
  );
};

export default Wrapper;
