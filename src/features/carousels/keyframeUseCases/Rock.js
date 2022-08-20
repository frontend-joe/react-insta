import styled, { keyframes } from "styled-components";

const rock = keyframes`
  50% {
    transform: translateY(1rem);
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  top: -16px;
  width: 2rem;
  height: 4rem;
  border-radius: 3rem;
  border: 3px solid white;

  animation: ${rock} 2s infinite linear;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 12px;
    border-radius: 2px;
    background: white;
    transform: translate(-50%, -50%);
  }
`;

const Wrapper = () => {
  return <StyledWrapper></StyledWrapper>;
};

export default Wrapper;
