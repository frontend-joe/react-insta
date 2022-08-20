import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledCheckboxWrapper = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.175);
`;

const StyledCheckbox = styled.span`
  position: absolute;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #1ac0a2;
  transform: translateY(100%);
  transition: all 0.35s;
`;

const StyledCheckboxTick = styled.span`
  font-size: 28px;
  color: #1d1c1d;
  transform: translateY(2px);
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledCheckboxWrapper} ${StyledCheckbox} {
    transform: translateY(0);
  }
`;

const Wrapper = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledCheckboxWrapper>
        <StyledCheckbox>
          <StyledCheckboxTick className="fas fa-check"></StyledCheckboxTick>
        </StyledCheckbox>
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};

export default Wrapper;
