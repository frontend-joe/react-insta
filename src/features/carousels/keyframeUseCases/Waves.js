import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledBadge = styled.span`
  position: absolute;
  z-index: 2;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #315cfc;
`;

const wave = keyframes`
  0% { transform: translateY(0) scale(0.75); opacity: 0; }
  10% { transform: translateY(0) scale(0.75); opacity: 0; }
  60% { opacity: 1; }
  100% { transform: translateY(-10px) scale(1.25); opacity: 0; }
`;

const StyledWave = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid white;

  animation: ${wave} 1s infinite linear;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 60%;
    border-radius: inherit;
    border: inherit;
    border-top: 4px solid white;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledBadge />
      <StyledWave />
    </StyledWrapper>
  );
};

export default Wrapper;
