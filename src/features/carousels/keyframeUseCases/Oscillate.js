import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background: #c22fbd;
  height: 4rem;
  width: 4rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
`;

const oscillate = keyframes`
  0% {
    transform: rotate(-70deg);
  }
  50% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(-70deg);
  }
`;

const StyledIcon = styled.i`
  font-size: 2rem;
  color: white;
  animation: ${oscillate} 2.25s infinite;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledIcon className="uil uil-wrench" />
    </StyledWrapper>
  );
};

export default Wrapper;
