import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  .ring1 {
    position: absolute;

    z-index: 1;
    width: 200px;
    height: 200px;
  }

  .ring2 {
    position: absolute;
    transform: rotate(-90deg);
    z-index: 2;
    width: 200px;
    height: 200px;
  }

  .ring1 circle {
    stroke: rgba(255, 255, 255, 0.1);
  }

  @keyframes load {
    0% {
      stroke-dashoffset: 628;
    }
    50% {
      stroke-dashoffset: 400;
    }
    100% {
      stroke-dashoffset: 628;
    }
  }

  .ring2 circle {
    stroke: #1ac0a2;
    stroke-linecap: round;
    stroke-dasharray: 628 628;
    stroke-dashoffset: 400;
    animation: load 4s infinite;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <svg
        class="ring1"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke-width="20" />
      </svg>
      <svg
        class="ring2"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="ring1-rail" cx="100" cy="100" r="80" stroke-width="20" />
      </svg>
    </StyledWrapper>
  );
};

export default Wrapper;
