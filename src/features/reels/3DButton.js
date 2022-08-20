import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  input {
    position: absolute;
    transform: scale(0);
  }

  label {
    width: 4rem;
    height: 4rem;
    transform-style: preserve-3d;
    cursor: pointer;
    transition: all 0.275s linear;
  }

  .face,
  .back {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  .face {
    background: #404448;
    transform: translateZ(2rem);
  }

  .back {
    display: grid;
    place-items: center;
    background: #21c182;
    color: #100f10;
    transform: rotateX(-90deg) translateZ(2rem);
    font-size: 1.75rem;
  }

  input:checked ~ label {
    transform: rotateX(90deg);
  }

  .text {
    color: rgba(255, 255, 255, 1);
    opacity: 0.45;
    font-size: 1.25rem;
  }

  input:checked ~ .text {
    opacity: 1;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <input id="c" type="checkbox" />
      <label for="c" class="rotate-button">
        <span class="face"></span>
        <span class="back">
          <span className="fas fa-check" />
        </span>
      </label>
      {/* <label for="c" class="text">
        Is Dank
      </label> */}
    </StyledWrapper>
  );
};

export default Wrapper;
