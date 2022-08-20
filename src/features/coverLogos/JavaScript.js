import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  width: 200px;
  height: 200px;
`;

const StyledInnerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #f0d91f;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledJay = styled.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`;

const shimmer = keyframes`
  from { transform: translateX(-300%) skewX(30deg); }
  to { transform: translateX(550%) skewX(30deg); }
`;

const StyledShimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffe610;
  width: 150%;
  height: 100%;
  opacity: 0.45;
  animation: ${shimmer} 3s infinite linear;
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledInnerWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="#F0D91F" />
        </svg>
        <StyledJay
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
        >
          <path d="M19.784 18.629c-.255-.961-2.251-1.185-3.616-2.205-1.38-.93-1.709-3.18-.569-4.471.39-.48 1.034-.84 1.71-1.005l.705-.089c1.365-.031 2.204.329 2.834 1.034.182.179.316.36.586.78-.721.449-.721.449-1.755 1.125-.226-.48-.586-.78-.976-.9-.6-.18-1.365.014-1.515.66-.059.195-.045.375.046.705.243.555 1.061.795 1.797 1.14 2.115.858 2.828 1.778 3.003 2.873l-.046-.067c.166.945-.045 1.56-.074 1.65-.781 2.67-5.131 2.76-6.871 1.004-.36-.42-.6-.629-.81-1.109l1.83-1.051c.495.75.944 1.156 1.755 1.336C18.914 20.174 20.024 19.799 19.784 18.629zM8.133 18.976c.017 0 .064.091.127.196.233.389.434.659.83.855.386.121 1.236.209 1.566-.48.201-.348.138-1.479.138-2.711 0-1.941.009-3.867.009-5.805h2.248l-.004.056c0 2.07.012 4.125 0 6.179.005 1.276.113 2.416-.397 3.346-.353.72-1.028 1.185-1.811 1.411-1.203.27-2.352.105-3.207-.405-.574-.345-1.019-.887-1.324-1.517L8.133 18.976z" />
        </StyledJay>
        <StyledShimmer />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
