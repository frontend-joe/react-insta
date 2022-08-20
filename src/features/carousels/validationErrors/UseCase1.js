import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 5.5rem;

  & input {
    width: 10rem;
    height: 2.5rem;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #585858;
    color: #f9f9f9;
    background: transparent;
    font-size: 0.75rem;
    outline: none;
  }

  .validation {
    overflow: hidden;
    display: flex;
    align-items: center;
    max-height: 0;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    background: #fd4444;
    color: #f9f9f9;
    font-size: 0.625rem;
    transition: all 0.35s;
  }

  & input:valid {
    border-color: #55d688;
  }

  & input:invalid ~ .validation {
    max-height: 2.5rem;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="text" placeholder="First Name" required />
      <div className="validation">* First Name Is Required</div>
    </StyledWrapper>
  );
};

export default Wrapper;
