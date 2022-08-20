import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(0.15);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .spinner {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #ffffff;
    animation: pulse 0.85s infinite linear;
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
