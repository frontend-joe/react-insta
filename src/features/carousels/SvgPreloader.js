import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 0;

  svg {
    animation: rotate 2s linear infinite;
    width: 300px;
    height: 300px;
  }

  circle {
    fill: none;
    stroke: white;
    stroke-width: 5px;
    stroke-linecap: round;
    animation: dash 1.75s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20"></circle>
      </svg>
    </StyledWrapper>
  );
};

export default Wrapper;
