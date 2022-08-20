import styled from "styled-components";

const StyledWrapper = styled.div`
  label {
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  input {
    position: absolute;
    transform: scale(0);
  }

  input:checked ~ .checkbox {
    transform: rotate(45deg);
    width: 20px;
    margin-left: 20px;
    border-color: #3eff98;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0;
  }

  .checkbox {
    display: block;
    width: inherit;
    height: inherit;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    transition: all 0.375s;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <label>
        <input type="checkbox" />
        <span class="checkbox"></span>
      </label>
    </StyledWrapper>
  );
};

export default Wrapper;
