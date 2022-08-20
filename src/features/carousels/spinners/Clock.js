import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes spin {
    to {
      transform: rotate(359deg);
    }
  }

  .spinner {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #f9f9f9;
  }

  .spinner::after {
    content: "";
    position: absolute;
    bottom: 29px;
    left: 30px;
    display: block;
    transform-origin: 0% 100%;
    width: 1px;
    height: 24px;
    background: #f9f9f9;
    animation: spin 1s infinite linear;
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
