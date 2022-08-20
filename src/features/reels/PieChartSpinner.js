import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 44.8px;
  height: 44.8px;
  color: #474bff;
  background: conic-gradient(currentColor 0 270deg, #0000 0);
  border-radius: 50%;
  animation: shapes-c03ehymd 4s infinite linear;

  &::before {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    border-top-left-radius: 112px;
    background: currentColor;
    animation: shapes-cskup3md 0.5s infinite alternate;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <div class="shapes"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
