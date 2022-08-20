import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const transition = "0.325s";

const StyledWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  padding: 1rem 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  & span {
    height: ${(p) => p.barHeight}px;
    border-radius: ${(p) => p.borderRadius}px;
  }
`;

const barStyles = css`
  display: block;
  width: 100%;
  border-radius: ${(p) => p.borderRadius};
  background: #eeeeee;
  pointer-events: none;
  transition-property: opacity, transform;
  transition-duration: ${transition};
`;

const floatingBar = css`
  ${barStyles};
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  transition: transform ${transition};
`;

const StyledFloatingBar = styled.span`
  ${floatingBar};
  transform-origin: 50%;
  transform: rotate(
    ${(p) => (p.isOpen ? (p.isFirst ? "-45deg" : "45deg") : 0)}
  );
`;

const StyledMiddleBar = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: ${(p) => p.barHeight}px;
`;

const StyledBar = styled.span`
  ${barStyles};
  opacity: ${(p) => (p.isOpen ? 0 : 1)};
  transform: translateY(
    ${(p) =>
      p.isOpen ? (p.isFirst ? `${p.barMove}px` : `-${p.barMove}px`) : 0}
  );
`;

const Wrapper = ({ size = 200, className }) => {
  const [isOpen, setOpen] = useState(false);

  const barHeight = size / 12;
  const borderRadius = size / 10;
  const barMove = size / 4;

  return (
    <StyledWrapper
      borderRadius={borderRadius}
      barHeight={barHeight}
      size={size}
      className={className}
      onClick={() => setOpen(!isOpen)}
    >
      <StyledBar isFirst isOpen={isOpen} barMove={barMove} />
      <StyledMiddleBar>
        <StyledFloatingBar isFirst isOpen={isOpen} />
        <StyledFloatingBar isOpen={isOpen} />
      </StyledMiddleBar>
      <StyledBar isOpen={isOpen} barMove={barMove} />
    </StyledWrapper>
  );
};

export default Wrapper;
