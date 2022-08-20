import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #2e5dca;
`;

const shake = keyframes`
  0% {
    transform: rotate(-8deg);
  }
  8% {
    transform: rotate(8deg);
  }
  16% {
    transform: rotate(-8deg);
  }
  24% {
    transform: rotate(8deg);
  }
  32% {
    transform: rotate(-8deg);
  }
  40% {
    transform: rotate(8deg);
  }
  48% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

const StyledIcon = styled.span`
  color: white;
  font-size: 3.25rem;

  &::before {
    animation: ${shake} 1.75s infinite;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledIcon className="uil uil-bell" />
    </StyledWrapper>
  );
};

export default Wrapper;
