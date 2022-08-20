import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  opacity: 0.86;
  top: ${(p) => p.y}px;
  left: ${(p) => p.x}px;
  width: ${(p) => p.diamondSize}px;
  height: ${(p) => p.diamondSize}px;
`;

const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

const Wrapper = ({ diamondSize, diamondColor, x, y }) => {
  return (
    <StyledWrapper diamondSize={diamondSize} x={x} y={y}>
      <svg viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.4589 151.064C-4.78136 129.824 -4.78135 95.3868 16.4589 74.1465L74.1473 16.4582C95.3876 -4.7821 129.825 -4.78209 151.065 16.4582L208.753 74.1466C229.994 95.3868 229.994 129.824 208.753 151.064L151.065 208.753C129.825 229.993 95.3876 229.993 74.1473 208.753L16.4589 151.064Z"
          fill={diamondColor}
        />
      </svg>
    </StyledWrapper>
  );
};

export default Wrapper;
