import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border-top: 8px solid rgba(255, 255, 255, 1);
    border-left: 8px solid rgba(255, 255, 255, 1);
    border-right: 8px solid rgba(255, 255, 255, 0);
    animation: spin 10.575s infinite linear;
  }

  .spinner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border-top: 8px solid rgba(255, 255, 255, 1);
    border-left: 8px solid rgba(255, 255, 255, 1);
    border-right: 8px solid rgba(255, 255, 255, 0);
    background: red;
    animation: spin 10.575s infinite linear;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="smooth spinner"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
