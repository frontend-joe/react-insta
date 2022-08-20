import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 12.5rem;
  height: 1.25rem;
  border-radius: 0.625rem;
  background: #8f44fd;

  @keyframes move {
    100% {
      transform: translateX(-50%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: repeating-linear-gradient(
      -45deg,
      transparent 0 0.5rem,
      #7a37df 0.5rem 1rem
    );

    animation: move 6s infinite linear;
  }
`;

const Wrapper = () => {
  return <StyledWrapper></StyledWrapper>;
};

export default Wrapper;
