import styled from "styled-components";

const StyledWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  font-size: 1.25rem;
  padding: 0 1.25rem 0 2rem;
`;

const StyledLink = styled.a`
  margin: 0 1rem;

  color: rgba(255, 255, 255, 0.5);
  transition: color 0.35s;

  &:hover {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledLink>Home</StyledLink>
      <StyledLink>About</StyledLink>
      <StyledLink>Work</StyledLink>
    </StyledWrapper>
  );
};

export default Wrapper;
