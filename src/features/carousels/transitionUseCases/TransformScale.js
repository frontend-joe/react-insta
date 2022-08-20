import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 4rem;
`;

const StyledBadge = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);

  &:hover {
    background: rgba(255, 255, 255, 0.82);

    transform: scale(1.25);
  }

  transition: background 0.35s, transform 0.35s;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledBadge />
      <StyledBadge />
      <StyledBadge />
      <StyledBadge />
    </StyledWrapper>
  );
};

export default Wrapper;
