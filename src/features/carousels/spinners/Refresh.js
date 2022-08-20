import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes spin {
    to {
      transform: rotate(-360deg);
    }
  }

  .spinner {
    position: relative;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 3px solid #f9f9f9;
    border-bottom-color: transparent;
    animation: spin 0.75s infinite linear;
  }

  .spinner::after,
  .spinner::before {
    content: "";
    position: absolute;
    background: #f9f9f9;
  }

  .spinner::before {
    bottom: 4px;
    left: 7px;
    width: 3px;
    height: 12px;
  }

  .spinner::after {
    bottom: 4px;
    left: -2px;
    width: 10px;
    height: 3px;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="spinner"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
