import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  height: 4rem;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  color: #7b7684;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledSmallLabel = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 6rem;
  transform: translate(3rem, -50%);
  color: #7b7684;
  font-size: 0.75rem;
  text-align: right;
  opacity: 0;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  height: inherit;
  width: 16rem;
  border: 0;
  border-bottom: 2px solid #2e2a33;
  outline: none;
  background: transparent;
  color: #f7f7f7;
  font-size: 1rem;
  transition: all 0.35s;

  &:focus {
    border-bottom-color: #1ac0a2;
  }

  &:focus ~ ${StyledLabel} {
    opacity: 0;
    transform: translate(-3rem, -50%);
  }

  &:focus ~ ${StyledSmallLabel} {
    opacity: 1;
    transform: translate(0, -50%);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledInput spellCheck={false} />
      <StyledLabel>Location</StyledLabel>
      <StyledSmallLabel>Location</StyledSmallLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
