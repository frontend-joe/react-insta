import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border-top: 8px solid rgba(255, 255, 255, 1);
    border-left: 8px solid rgba(255, 255, 255, 1);
    border-right: 8px solid rgba(255, 255, 255, 0);
    animation: spin 0.575s infinite linear;
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
