import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;

  & input {
    width: 10rem;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #585858;
    color: #f9f9f9;
    background: transparent;
    font-size: 0.75rem;
    outline: none;
  }

  .validation {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translate(80px, -50%);
    opacity: 0;
    color: #f9f9f9;
    font-size: 0.5rem;
    transition: all 0.35s;
  }

  & input:valid {
    border-color: #55d688;
  }

  & input:invalid {
    border-color: #fd4444;
  }

  & input:invalid ~ .validation {
    opacity: 1;
    transform: translate(0, -50%);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="text" placeholder="First Name" required />
      <div className="validation">* Required</div>
    </StyledWrapper>
  );
};

export default Wrapper;
