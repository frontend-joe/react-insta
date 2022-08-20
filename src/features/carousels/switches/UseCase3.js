import styled from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledSwitch = styled.span`
  overflow: hidden;
  position: relative;
  display: block;
  width: 76px;
  height: 40px;
  background: #414048;

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    display: block;
    width: 32px;
    height: 32px;
    background: #1d1c1d;
    transition: all 0.35s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    right: 4px;
    display: block;
    width: 32px;
    height: 32px;
    background: #1d1c1d;
    transform: translateY(-40px);
    transition: all 0.35s;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledSwitch} {
    background: #1ac0a2;
  }

  &:checked ~ ${StyledSwitch}::after {
    transform: translateY(0);
  }

  &:checked ~ ${StyledSwitch}::before {
    transform: translateY(-40px);
  }
`;

const Wrapper = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledSwitch></StyledSwitch>
    </StyledLabel>
  );
};

export default Wrapper;
