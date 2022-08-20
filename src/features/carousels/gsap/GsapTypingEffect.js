import styled from "styled-components";

import { useEffect } from "react";

import { gsap } from "gsap";

import { TimelineMax, SteppedEase } from "gsap/all";

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  .line-1 {
    overflow: hidden;
    width: 189px;
    font-size: 29px;
    border-right: 2px solid #e1e1e1;
    font-family: "Anonymous Pro";
    letter-spacing: 0.075px;
    color: #f9f9f9;
  }
`;

const tl = new TimelineMax({
  paused: true,
});

const Wrapper = ({ className }) => {
  useEffect(() => {
    // letter animation
    tl.fromTo(
      ".anim-typewriter",
      3,
      {
        width: "0",
      },
      {
        width: "189px" /* same as CSS .line-1 width */,
        ease: SteppedEase.config(12),
      },
      0
    );
    // text cursor animation
    tl.fromTo(
      ".anim-typewriter",
      0.5,
      {
        "border-right-color": "#e1e1e1",
      },
      {
        "border-right-color": "#000000",
        repeat: -1,
        ease: SteppedEase.config(12),
      },
      0
    );

    tl.play();
  }, []);

  return (
    <StyledWrapper className={className}>
      <p className="line-1 anim-typewriter">frontendjoe</p>
    </StyledWrapper>
  );
};

export default Wrapper;
