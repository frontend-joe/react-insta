import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @keyframes move {
    100% {
      transform: translateX(1200px);
    }
  }

  .godzilla-wrapper {
    position: absolute;
    z-index: 2;
    left: -620px;
    bottom: -100px;
    animation: move 20s infinite linear;
  }

  @keyframes stomp {
    0%,
    70%,
    100% {
      transform: rotate(0);
    }
    60% {
      transform: translateY(-2.5rem) rotate(-6deg);
    }
  }

  .godzilla {
    position: absolute;
    left: 0;
    bottom: -50px;
    animation: stomp 1s infinite;
  }

  .mountain {
    position: absolute;
    z-index: -1;
    left: -100px;
    bottom: -150px;
    width: 1000px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <div class="godzilla-wrapper">
        <img
          className="godzilla"
          src="https://piratecode.ru/img/blocks/about/godzilla.png"
        />
      </div>
      <img
        className="mountain"
        src="https://piratecode.ru/img/blocks/intro/mountain.png"
      />
    </StyledWrapper>
  );
};

export default Wrapper;
