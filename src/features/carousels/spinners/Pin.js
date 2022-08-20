import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes move {
    to {
      transform: rotate(45deg) translate(-20px, -20px);
    }
  }

  .loader {
    position: relative;
    width: 56px;
    height: 56px;
    margin-top: -30px;
  }

  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
  }

  .loader::before {
    transform: rotate(45deg) translate(0, 0);
    box-sizing: border-box;
    padding: 14px;
    border-radius: 50% 50% 0;
    border: 14px solid #fff;
    animation: move 0.8s infinite alternate ease-in-out;
  }

  @keyframes shadow {
    50% {
      transform: scale(2.5, 1.5);
    }
  }

  .loader::after {
    top: 76px;
    left: 13px;
    width: 30px;
    height: 10px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    animation: shadow 1.6s infinite ease-in-out;
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
