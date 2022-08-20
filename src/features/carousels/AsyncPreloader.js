import styled, { keyframes } from "styled-components";

const spinnerSize = 180;
const lineWidth = 35;

const rotate = keyframes`
  100% { transform: rotate(360deg) }
`;

const StyledWrapper = styled.div`
  position: absolute;
  right: 90px;
  bottom: 20px;
  width: ${spinnerSize}px;
  height: ${spinnerSize}px;
  border-radius: 50%;
  border: ${lineWidth}px solid #232325;
  border-top-color: #1abcfe;
  animation: ${rotate} 3s infinite linear;
`;

const Wrapper = () => {
  return <StyledWrapper />;
};

export default Wrapper;
