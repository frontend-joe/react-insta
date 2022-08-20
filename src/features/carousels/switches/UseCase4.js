import styled from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledSwitch = styled.span`
  position: relative;
  display: block;
  width: 76px;
  height: 40px;
  border-radius: 20px;
  background: #414048;

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
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
    border-radius: 50%;
    background: #1d1c1d;
    transform: translateX(40px);
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
    transform: translateX(-40px);
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
