import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 0.65rem;
  transform: translateY(-50%);
  color: #888888;
  padding: 0.25rem 0.5rem;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  font-size: 1.675rem;
  transform: translateY(-50%);
  color: #888888;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  height: inherit;
  width: 16rem;
  border: 2px solid #888888;
  border-radius: 0.5rem;
  outline: none;
  background: transparent;
  color: #f7f7f7;
  font-size: 1rem;
  text-indent: 1rem;
  transition: all 0.35s;

  &:focus {
    border-color: #8f44fd;
  }

  &:focus ~ ${StyledIcon} {
    color: #fff;
  }

  &:focus ~ ${StyledLabel} {
    background: #16141b;
    color: rgba(255, 255, 255, 0.75);
    transform: translateY(-2.875rem);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledInput spellCheck={false} />
      <StyledLabel>First Names</StyledLabel>
      <StyledIcon className="material-icons">account_circle</StyledIcon>
    </StyledWrapper>
  );
};

export default Wrapper;
