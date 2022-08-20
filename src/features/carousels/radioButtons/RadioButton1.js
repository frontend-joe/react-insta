import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledRadioButton = styled.span`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid #8f44fd;
`;

const StyledRadioLabel = styled.span`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.76);
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledRadioButton} {
    background: #8f44fd;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioButton />
        <StyledRadioLabel>Dark</StyledRadioLabel>
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioButton />
        <StyledRadioLabel>Light</StyledRadioLabel>
      </StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
