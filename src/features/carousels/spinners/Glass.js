import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes load {
    0% {
      box-shadow: 0 0 #ed3b65 inset;
    }
    100% {
      box-shadow: 0 -70px #ed3b65 inset;
    }
  }

  .spinner {
    width: 32px;
    height: 72px;
    position: relative;
    border: 2px solid #fff;
    animation: load 1.5s linear infinite alternate;
    transform: perspective(140px) rotateX(-45deg);
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
