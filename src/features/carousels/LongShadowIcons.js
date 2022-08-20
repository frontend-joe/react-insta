import styled, { css } from "styled-components";
import { darken } from "polished";

const length = 100;

const longShadow = (color) => {
  let shadow = css``;

  for (let i = 1; i < length; i++) {
    shadow += `${i !== 1 ? "," : ""}${i}px ${i}px ${darken(0.1, color)}`;
  }

  return shadow;
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledIcon = styled.span`
  overflow: hidden;
  display: grid;
  place-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${(p) => p.color};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  &::before {
    color: #f9f9f9;
    font-size: 2rem;
    text-shadow: ${(p) => longShadow(p.color)};
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledIcon color="#33a2de" className="fa-brands fa-digital-ocean" />
      <StyledIcon color="#ff8e39" className="fa-brands fa-dribbble" />
      <StyledIcon color="#3ad397" className="fa-brands fa-google" />
    </StyledWrapper>
  );
};

export default Wrapper;
