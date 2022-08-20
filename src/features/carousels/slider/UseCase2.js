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

  .slider-2::-webkit-slider-thumb {
    width: 40px;
    height: 40px;
    background: url("https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png");
    background-size: 70%;
    background-position: 50% 0;
    background-repeat: no-repeat;
  }

  .slider-2::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="range" min="1" max="100" class="slider slider-2" />
    </StyledWrapper>
  );
};

export default Wrapper;
