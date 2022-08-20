import styled, { keyframes } from "styled-components";

const StyledCard = styled.div`
  overflow: hidden;
  height: 7rem;
  width: 16rem;
  border-radius: 1.5rem;
  background: #212025;
`;

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-31px);
  }
`;

const StyledProgressWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  transform: translateY(0);
  background: #3fc3a4;
  height: 0.625rem;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: #389e86
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        #3fc3a4 10px,
        #3fc3a4 20px
      );

    animation: ${loadingKeyframes} 1s infinite linear;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledCard className={className}>
      <StyledProgressWrapper></StyledProgressWrapper>
    </StyledCard>
  );
};

export default Wrapper;
