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

  .slider-4::-webkit-slider-thumb {
    transform: rotate(45deg);
    border-radius: 4px;
    background: #8f44fd;
  }

  .slider-4::-webkit-slider-thumb:hover {
    transform: scale(1.2, 0.9);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="range" min="1" max="100" class="slider slider-4" />
    </StyledWrapper>
  );
};

export default Wrapper;
