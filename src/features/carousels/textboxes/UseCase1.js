import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  height: 4rem;
  border: 0;
  border-radius: 4rem;
  background: #ffffff;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: grid;
  place-items: center;
  height: 3rem;
  width: 6rem;
  font-size: 0.875rem;
  background: #3a8ced;
  color: #ffffff;
  border-radius: inherit;
  pointer-events: none;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  flex: 1 1 auto;
  padding-left: 6.5rem;
  height: inherit;
  border: 0;
  outline: none;
  background: transparent;
  font-size: 1rem;
  text-indent: 0.625rem;
  transition: all 0.35s;

  &::placeholder {
    color: #9b9ba5;
  }

  &:focus {
    transform: translateX(-6rem);
  }

  &:focus ~ ${StyledLabel} {
    transform: translateY(-4rem);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledInput placeholder="Type a name ..." />
      <StyledLabel>Username</StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
