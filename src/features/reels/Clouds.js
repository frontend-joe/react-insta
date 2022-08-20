import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div``;

const cloudKeyframes = keyframes`
  100% {
    transform: translateX(-1000px);
  }
`;

const StyledCloud = styled.div`
  position: absolute;
  left: 500px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background: #ffffff;
  animation: ${cloudKeyframes} 10s infinite linear;

  &::after {
    content: "";
    position: absolute;
    left: 18px;
    bottom: 35px;
    width: 60px;
    height: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: inherit;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledCloud
        style={{ top: "200px", left: "600px", transform: "scale(2)" }}
      />
      <StyledCloud
        style={{ top: "400px", left: "500px", transform: "scale(0.875)" }}
      />
      <StyledCloud
        style={{ top: "650px", left: "600px", transform: "scale(2.25)" }}
      />
      <StyledCloud
        style={{ top: "850px", left: "630px", transform: "scale(1)" }}
      />
    </StyledWrapper>
  );
};

export default Wrapper;
