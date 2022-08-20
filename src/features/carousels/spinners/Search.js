import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes load {
    25% {
      transform: translate(20px, 0);
    }
    50% {
      transform: translate(20px, 20px);
    }
    75% {
      transform: translate(0, 20px);
    }
    0%,
    100% {
      transform: translate(0, 0);
    }
  }

  .loader {
    position: relative;
    width: 44px;
    height: 44px;
    margin: -20px 0 0 -12px;
    border-radius: 50%;
    border: 6px solid #fff;
    animation: load 3s infinite;
  }

  .loader::after {
    content: "";
    position: absolute;
    right: -12px;
    bottom: -4px;
    width: 18px;
    height: 6px;
    transform: rotate(45deg);
    background: #fff;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="loader"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
