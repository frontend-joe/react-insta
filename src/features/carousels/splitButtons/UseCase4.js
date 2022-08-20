import styled, { css } from "styled-components";
import { useState } from "react";

const StyledWrapper = styled.div`
  position: relative;
  perspective: 1000px;
  display: flex;
  gap: 3px;
  height: 4rem;
  background: #82794e;
  border-radius: 8px;
`;

const sharedStyles = css`
  display: grid;
  place-items: center;
  border: 0;
  color: #f7f7f7;
  font-size: 1.125rem;
`;

const StyledButtonPrimary = styled.button`
  ${sharedStyles};
  padding: 0 1.25rem;
  background: inherit;
  min-width: 200px;
  border-radius: 8px 0 0 8px;
`;

const StyledButtonSecondary = styled.button`
  ${sharedStyles};
  border-radius: 0 8px 8px 0;
  background: #716943;
  width: 3.5rem;

  transition: all 0.35s;

  & > span {
    font-size: 26px;
  }
`;

const menuOpenStyles = css`
  visibility: visible;
  opacity: 1;
  transform: scale(1) rotateX(0);
`;

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  top: 4.5rem;
  padding: 8px 0;
  border-radius: 8px;
  background: white;
  visibility: hidden;
  opacity: 0;
  min-width: 200px;

  transform: scale(0.75) translateY(20px) rotateX(180deg);
  transform-origin: 50% 50%;

  ${(p) => p.isOpen && menuOpenStyles};

  transition: all 0.5s;
`;

const StyledMenuLink = styled.a`
  color: #45424d;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  ${(p) => p.hasBorder && "border-top: 1px solid #e7e7e7"};

  &:hover {
    background: #f7f7f7;
  }
`;

const Wrapper = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <StyledWrapper>
      <StyledButtonPrimary>Move Money</StyledButtonPrimary>
      <StyledButtonSecondary onClick={() => setClicked(true)}>
        <span class="material-icons">arrow_drop_down</span>
      </StyledButtonSecondary>

      <StyledMenu isOpen={clicked} onClick={() => setClicked(false)}>
        <StyledMenuLink>Action</StyledMenuLink>
        <StyledMenuLink>Another action</StyledMenuLink>
        <StyledMenuLink>Something else here</StyledMenuLink>
        <StyledMenuLink hasBorder>Separated Link</StyledMenuLink>
      </StyledMenu>
    </StyledWrapper>
  );
};

export default Wrapper;
