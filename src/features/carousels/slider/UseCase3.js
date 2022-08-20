import styled from "styled-components";

const StyledWrapper = styled.div`
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 15px;
    background: #2b2d32;
    outline: none;
    transition: all 0.3s ease;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #8f44fd;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .slider-3.slider {
    height: 26px;
    padding: 0 4px;
    border-radius: 50px;
    background: #2a2d32;
    box-shadow: inset 14px 14px 29px #1a1b1e, inset -14px -14px 29px #2b2d32;
  }

  .slider-3::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background: radial-gradient(
      circle at 20%,
      #d8d7d7 0%,
      #626262 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="range" min="1" max="100" class="slider slider-3" />
    </StyledWrapper>
  );
};

export default Wrapper;
