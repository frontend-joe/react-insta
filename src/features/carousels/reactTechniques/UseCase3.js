import React, { useRef, useEffect, useState } from "react";

import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform: translateY(-30px);

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
    100% {
      stroke-dashoffset: 0;
    }
  }

  .ring2 circle {
    stroke: #8a44fd;
    stroke-linecap: round;
    stroke-dasharray: 628 628;
    stroke-dashoffset: 400;
    animation: load 10s infinite;
  }
`;

const StyledTimer = styled.div`
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Countdown() {
  const [num, setNum] = useState(100);

  let intervalRef = useRef();

  const decreaseNum = () => {
    setNum((prev) => {
      prev === 1 && clearInterval(intervalRef.current);
      return prev > 0 ? prev - 1 : 0;
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 50);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <StyledWrapper>
        <StyledTimer>{num}</StyledTimer>
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
          <circle
            class="ring1-rail"
            cx="100"
            cy="100"
            r="80"
            stroke-width="20"
          />
        </svg>
      </StyledWrapper>
    </div>
  );
}
