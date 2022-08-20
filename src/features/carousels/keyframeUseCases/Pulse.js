import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  100% {
    opacity: 0;
    transform: scale(2.75);
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  font-size: ${(p) => p.size};

  &::before {
    position: absolute;
    z-index: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #da43d5;
    animation: ${pulse} 1.3s infinite linear;
  }
`;

const StyledBadge = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  font-size: 50%;
  border-radius: 50%;
  background: #da43d5;
  color: white;
`;

const Wrapper = ({ className, size = "50px" }) => {
  return (
    <div className={className}>
      <StyledWrapper size={size}>
        <StyledBadge size={size}>9</StyledBadge>
      </StyledWrapper>
    </div>
  );
};

export default Wrapper;
