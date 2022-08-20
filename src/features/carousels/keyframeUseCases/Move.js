import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(-20px);
  }
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  padding: 0 3rem;
  font-family: inherit;
  font-size: 20px;
  background: transparent;
  border: 0;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: wait;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;

  & > span {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: #05bd7a
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #05a067 10px,
        #05a067 20px
      );

    animation: ${loadingKeyframes} 1s infinite linear;
  }
`;

const Wrapper = () => {
  return (
    <StyledButton>
      <span>Please Wait</span>
    </StyledButton>
  );
};

export default Wrapper;
