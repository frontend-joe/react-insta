import styled from "styled-components";

const StyledWrapper = styled.div`
  input {
    position: absolute;
    transform: scale(0);
  }

  label {
    display: flex;
    width: 72px;
    height: 40px;
    padding: 4px;
    background: #3b383b;
    transition: all 0.4s;
  }

  input:checked ~ label {
    background: #0eaf7f;
  }

  input:checked ~ label .handle {
    transform: translateX(32px);
  }

  .handle {
    width: 32px;
    height: 32px;
    background: #100f10;
    transition: all 0.4s;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <input id="cb" type="checkbox" />
      <label for="cb">
        <span class="handle"></span>
      </label>
    </StyledWrapper>
  );
};

export default Wrapper;
