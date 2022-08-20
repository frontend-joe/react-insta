import styled from "styled-components";

const StyledIcon = styled.span`
  font-size: 25px;
  transition: transform 0.35s;
`;

const StyledText = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const StyledWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 0 1.25rem 0 2rem;
  border-radius: 0.25rem;
  background: #11ca9d;
  color: white;

  &:hover ${StyledIcon} {
    transform: translateX(6px);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledText>Get Started</StyledText>
      <StyledIcon className="uil uil-angle-right" />
    </StyledWrapper>
  );
};

export default Wrapper;
