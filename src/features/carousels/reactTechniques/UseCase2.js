import styled from "styled-components";

import { useState } from "react";

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 24rem;
  height: 16rem;
  border-radius: 1.5rem;
  background: #0c0b0e;
  color: #ffffff;
  line-height: 1;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2f2a35;
  padding: 1rem 1.5rem;
  font-size: 1.175rem;
  margin-bottom: 1rem;
`;

const StyledHeaderSubtitle = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 3px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 0 1.5rem;
`;

const StyledRowLabel = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

const StyledTextbox = styled.input`
  outline: none;
  background: transparent;
  border: 0;
  text-align: right;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;

const StyledCheckbox = styled.span`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 0.325rem;
  background: rgba(255, 255, 255, 0.175);
  transition: all 0.25s;
`;

const StyledCheckboxTick = styled.span`
  opacity: 0;
  font-size: 14px;
  color: #fff;
  transform: translateY(1px);
  transition: all 0.25s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledCheckbox} {
    background: #8a44fd;
  }

  &:checked ~ ${StyledCheckbox} ${StyledCheckboxTick} {
    opacity: 1;
  }
`;

const Wrapper = () => {
  const [state, setState] = useState({
    username: "Joe Harrison",
    job: "Frontend Developer",
    active: true,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <div>
          {state?.username}

          <StyledHeaderSubtitle>{state?.job}</StyledHeaderSubtitle>
        </div>
        <div>{state?.active && "Active"}</div>
      </StyledHeader>

      <StyledRow>
        <StyledRowLabel>Username</StyledRowLabel>
        <StyledTextbox
          onChange={handleChange}
          name="username"
          type="text"
          value={state?.username}
        />
      </StyledRow>

      <StyledRow>
        <StyledRowLabel>Job Title</StyledRowLabel>
        <StyledTextbox
          onChange={handleChange}
          name="job"
          type="text"
          value={state?.job}
        />
      </StyledRow>

      <StyledRow>
        <StyledRowLabel>Active</StyledRowLabel>
        <StyledLabel>
          <StyledInput
            onChange={handleChange}
            name="active"
            type="checkbox"
            checked={state?.active}
          />
          <StyledCheckbox>
            <StyledCheckboxTick className="fas fa-check"></StyledCheckboxTick>
          </StyledCheckbox>
        </StyledLabel>
      </StyledRow>
    </StyledWrapper>
  );
};

export default Wrapper;
