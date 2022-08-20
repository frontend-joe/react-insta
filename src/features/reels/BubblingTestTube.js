import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;

  .test-tube {
    position: relative;
    overflow: hidden;
    width: 30px;
    height: 90px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-top: 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  @keyframes bubble {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) scale(2);
    }
  }

  .bubbles {
    position: absolute;
    top: 70px;
    left: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
    animation: bubble 2s infinite linear;
  }

  .bubbles::before,
  .bubbles::after {
    content: "";
    position: inherit;
    bottom: 10px;
    left: 2px;
    background: inherit;
    width: 5px;
    height: 5px;
    border-radius: inherit;
  }

  @keyframes liquid-move {
    50% {
      transform: translateY(-28px);
    }
  }

  .liquid {
    position: absolute;
    top: 60px;
    left: 0;
    width: 200%;
    height: 100%;
    background: #ec3b95;
    animation: liquid-move 4s infinite linear;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <div className="test-tube">
        <div className="liquid"></div>
        <div className="bubbles"></div>
      </div>
      <div className="test-tube">
        <div
          className="liquid"
          style={{ animationDelay: "2s", background: "#9c3bec" }}
        ></div>
        <div className="bubbles" style={{ animationDelay: "1s" }}></div>
      </div>
      <div className="test-tube">
        <div
          className="liquid"
          style={{ animationDelay: "0", background: "#3BC3F1" }}
        ></div>
        <div className="bubbles"></div>
      </div>
    </StyledWrapper>
  );
};

export default Wrapper;
