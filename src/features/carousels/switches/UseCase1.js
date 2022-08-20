import styled from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledSwitch = styled.span`
  display: block;
  width: 76px;
  padding: 4px;
  background: #414048;
  transition: all 0.35s;
`;

const StyledKnob = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  background: #1d1c1d;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledSwitch} {
    background: #1ac0a2;
  }

  &:checked ~ ${StyledSwitch} ${StyledKnob} {
    transform: translateX(36px);
  }
`;

const Wrapper = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledSwitch>
        <StyledKnob></StyledKnob>
      </StyledSwitch>
    </StyledLabel>
  );
};

export default Wrapper;
