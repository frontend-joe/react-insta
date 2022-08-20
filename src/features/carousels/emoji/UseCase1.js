import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  gap: 1rem;

  input {
    position: absolute;
    transform: scale(0);
  }

  label {
    display: flex;
    align-items: center;
    width: 160px;
    height: 56px;
    padding: 0 10px;
    border-radius: 16px;
    border: 3px solid rgba(255, 255, 255, 0.1);
  }

  .text {
    position: relative;
    color: #f7f7f7;
    font-size: 17px;
    padding-left: 36px;
    line-height: 100%;
  }

  .text::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    font-size: 22px;
  }

  label:nth-child(1) .text::before {
    content: "🍌";
  }

  label:nth-child(2) .text::before {
    content: "🍏";
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <label>
        <input type="radio" name="radios" />
        <span class="button">
          <span class="text">Bananas</span>
        </span>
      </label>
      <label>
        <input type="radio" name="radios" />
        <span class="button">
          <span class="text">Apples</span>
        </span>
      </label>
    </StyledWrapper>
  );
};

export default Wrapper;
