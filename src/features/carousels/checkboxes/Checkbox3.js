import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledCheckbox = styled.span`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.175);
  transition: all 0.35s;
`;

const StyledCheckboxTick = styled.span`
  opacity: 0;
  font-size: 28px;
  color: #1d1c1d;
  transform: translateY(2px);
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledCheckbox} {
    background: #1ac0a2;
  }

  &:checked ~ ${StyledCheckbox} ${StyledCheckboxTick} {
    opacity: 1;
  }
`;

const Wrapper = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledCheckbox>
        <StyledCheckboxTick className="fas fa-check"></StyledCheckboxTick>
      </StyledCheckbox>
    </StyledLabel>
  );
};

export default Wrapper;
