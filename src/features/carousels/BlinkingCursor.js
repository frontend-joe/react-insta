import styled, { keyframes } from "styled-components";

const blink = keyframes`
  49.99% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 0;
  }
  100 {
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBlinker = styled.div`
  width: 3px;
  height: 80px;
  background: #f7f7f7;
  animation: ${blink} 1.25s infinite;
`;

const StyledText = styled.div`
  font-size: 40px;
  color: #aaa;
  margin-left: 20px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledBlinker />
      <StyledText>Type Something</StyledText>
    </StyledWrapper>
  );
};

export default Wrapper;
