import styled, { keyframes } from "styled-components";

import blobImage from "assets/joe-square-transparent.png";

const morphKeyframes = keyframes`
  0%, 100% {
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
  }
  34% {
    border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
  }
  67% {
    border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
  }
`;

const StyledWrapper = styled.div`
  .blob {
    opacity: 0.95;
    background: plum;
    width: 250px;
    height: 250px;
    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
    background: #8f44fd
      url("https://www.xtrafondos.com/wallpapers/glenwood-springs-en-colorado-6641.jpg");
    background-size: cover;
    background-position: center;
    animation: ${morphKeyframes} 3.75s linear infinite;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="blob"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
