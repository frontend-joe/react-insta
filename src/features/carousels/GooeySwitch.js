import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledSwitch = styled.span`
  display: block;
  width: 76px;
  padding: 4px;
  border-radius: 20px;
  background: #414048;
  transition: all 0.35s;
`;

const gooeyIn = keyframes`
  55% {
    transform:scaleX(1.25);
  }
`;

const gooeyOut = keyframes`
  45% {
    transform:scaleX(1.25);
  }
`;

const gooeyInAnimation = css`
  animation: ${gooeyIn} 0.35s;
`;

const gooeyOutAnimation = css`
  animation: ${gooeyOut} 0.35s;
`;

const StyledKnob = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #100f10;
  ${(p) => !p.isChecked && gooeyOutAnimation};
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledSwitch} {
    background: #1ac0a2;
  }

  &:checked ~ ${StyledSwitch} ${StyledKnob} {
    margin-left: 36px;
    ${(p) => p.checked && gooeyInAnimation};
  }
`;

const Wrapper = ({ className }) => {
  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <StyledLabel className={className}>
      <StyledInput
        id="my-input"
        onChange={handleChange}
        checked={isChecked}
        type="checkbox"
      />
      <StyledSwitch>
        <StyledKnob isChecked={isChecked}></StyledKnob>
      </StyledSwitch>
    </StyledLabel>
  );
};

export default Wrapper;
