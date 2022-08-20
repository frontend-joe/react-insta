import styled from "styled-components";

import cssLogo from "assets/css-logo-square.png";

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 90px;
  height: 90px;
  color: #69ca62;

  & img {
    width: 90%;
    height: 90%;
  }

  @keyframes clipMe {
    0%,
    100% {
      clip: rect(0, 100px, 2px, 0);
    }
    25% {
      clip: rect(0, 2px, 100px, 0);
    }
    50% {
      clip: rect(98px, 100px, 100px, 0);
    }
    75% {
      clip: rect(0, 100px, 100px, 98px);
    }
  }

  &::before,
  &::after {
    position: absolute;
    box-sizing: inherit;
    top: 0;
    left: 0;
    content: "";
    z-index: 1;
    width: 110%;
    height: 110%;
    margin: -5%;
    box-shadow: inset 0 0 0 2px #f7df1c;
    animation: clipMe 3.5s linear infinite;
    transition: all 0.25s;
  }

  &:hover::before,
  &:hover::after {
    background: rgba(0, 0, 0, 0.25);
  }

  &::before {
    animation-delay: -1.75s;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" />
    </StyledWrapper>
  );
};

export default Wrapper;
