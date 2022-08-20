import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;

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
    top: 0.55rem;
    right: 0.7rem;
    opacity: 0;
    color: #fd4444;
    font-size: 1.5rem;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(8px);
    }
    75% {
      transform: translateX(-8px);
    }
    100% {
      transform: translateX(0);
    }
  }

  & input:valid {
    border-color: #55d688;
  }

  & input:invalid {
    border-color: #fd4444;
    animation: shake 0.1635s 0s 3;
  }

  & input:invalid ~ .validation {
    opacity: 1;
    animation: shake 0.1635s 0s 3;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="text" placeholder="First Name" required />
      <div className="validation">*</div>
    </StyledWrapper>
  );
};

export default Wrapper;
