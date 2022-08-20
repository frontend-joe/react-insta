import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSelect = styled.select`
  width: 10rem;
  height: 3rem;
  border: 0;
  background: #4c72ff;
  border-radius: 0.25rem;
  color: white;
  caret-color: white;
  outline: none;
  padding: 0 1rem;
  margin-left: 1rem;

  transition: opacity 0.35s;

  &:disabled {
    opacity: ${(p) => (p.disabled ? 0.5 : 1)};
    cursor: not-allowed;
  }
`;

const Wrapper = () => {
  const [isActive, setDisabled] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.checked);
    setDisabled(e.target.checked);
  };

  return (
    <StyledWrapper>
      <input onChange={handleChange} type="checkbox" />
      <StyledSelect disabled={!isActive}>
        <option value="1">Select Option</option>
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Wrapper;
