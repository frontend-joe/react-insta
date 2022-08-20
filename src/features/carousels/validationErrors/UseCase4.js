import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;

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
    bottom: 3rem;
    display: flex;
    align-items: center;
    height: 1.5rem;
    padding: 0 0.5rem;
    opacity: 0;
    transform: translateY(10px);
    border-radius: 1.5rem;
    background: #fd4444;
    color: #f9f9f9;
    font-size: 0.5rem;
    transition: all 0.35s;
  }

  .validation::after {
    content: "";
    position: absolute;
    left: 15px;
    bottom: -2px;
    width: 4px;
    height: 4px;
    transform: rotate(45deg);
    background: inherit;
  }

  & input:valid {
    border-color: #55d688;
  }

  & input:invalid ~ .validation {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <input type="text" placeholder="First Name" required />
      <div className="validation">First Name Is Required</div>
    </StyledWrapper>
  );
};

export default Wrapper;
