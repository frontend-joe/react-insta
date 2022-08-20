import styled from "styled-components";

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledCheckbox = styled.span`
  display: block;
  width: 56px;
  height: 56px;
  border: 4px solid rgba(255, 255, 255, 0.175);
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledCheckbox} {
    transform: rotate(45deg);
    width: 20px;
    border-color: #1ac0a2;
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;

const Wrapper = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledCheckbox></StyledCheckbox>
    </StyledLabel>
  );
};

export default Wrapper;
