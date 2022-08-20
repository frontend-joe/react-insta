import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(2.5rem, -50%);
  transform-origin: 0% 0%;
  color: #888888;
  padding: 0.25rem 0;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 1.675rem;
  transform: translateY(-50%);
  color: #888888;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledUnderline = styled.span`
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  width: 100%;
  height: 2px;
  background: #0fa5a2;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  height: inherit;
  width: 16rem;
  padding-left: 2.5rem;
  border: 0;
  border-bottom: 2px solid #2e2a33;
  outline: none;
  background: transparent;
  color: #f7f7f7;
  font-size: 1rem;
  transition: all 0.35s;

  &:focus ~ ${StyledIcon} {
    color: #fff;
  }

  &:focus ~ ${StyledLabel} {
    background: #16141b;
    color: #0fa5a2;
    transform: translate(0, -2.875rem) scale(0.875);
  }

  &:focus ~ ${StyledUnderline} {
    transform: scaleX(1);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledInput spellCheck={false} />
      <StyledUnderline />
      <StyledLabel>Search products</StyledLabel>
      <StyledIcon className="material-icons">search</StyledIcon>
    </StyledWrapper>
  );
};

export default Wrapper;
