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
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid #8f44fd;
`;

const StyledRadioButtonInner = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: #8f44fd;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition: all 0.35s;
`;

const StyledRadioLabel = styled.span`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.76);
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledRadioButton} ${StyledRadioButtonInner} {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioButton>
          <StyledRadioButtonInner />
        </StyledRadioButton>
        <StyledRadioLabel>Yay</StyledRadioLabel>
      </StyledLabel>
      <StyledLabel>
        <StyledInput type="radio" name="group" />
        <StyledRadioButton>
          <StyledRadioButtonInner />
        </StyledRadioButton>
        <StyledRadioLabel>Nay</StyledRadioLabel>
      </StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
