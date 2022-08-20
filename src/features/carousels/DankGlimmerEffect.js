import styled from "styled-components";

const StyledWrapper = styled.div`
  & .text {
    position: relative;
    margin: 0;
    color: rgba(255, 255, 255, 0.96);
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .glimmer {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    bottom: 4px;
    left: 3px;
    transform: translateZ(0);
    border-radius: 5px;
    width: calc(100% - 3px);
    height: 5px;
    background: #8f44fd;
  }

  @keyframes glimmer {
    100% {
      transform: translateX(200%);
    }
  }

  .glimmer::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #8f44fd 0% 20%,
      #fd44ef 50%,
      #8f44fd 80% 100%
    );
    animation: glimmer 2s;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <h2 className="text">Dank</h2>
      <h2 className="text">
        Glimmer
        <span className="glimmer"></span>
      </h2>
      <h2 className="text">Effect</h2>
    </StyledWrapper>
  );
};

export default Wrapper;
