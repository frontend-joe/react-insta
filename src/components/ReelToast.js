import styled, { css, keyframes } from "styled-components";

const titleKeyframes = keyframes`
  0%, 8% {
    opacity: 0;
    transform: translateY(120px);
  }
  11%, 20.5% {
    opacity: 1;
    transform: translateY(0);
  }
  23.5%, 100% {
    opacity: 0;
    transform: translateY(120px);
  }
`;

const tipKeyframes = keyframes`
  0%, 58% {
    opacity: 0;
    transform: translateY(60px);
  }
  61%, 74.5% {
    opacity: 1;
    transform: translateY(0);
  }
  77.5%, 100% {
    opacity: 0;
    transform: translateY(60px);
  }
`;

const sharedStyles = css`
  position: absolute;
  z-index: 100;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.96);
  opacity: 0;
`;

const StyledTitleToast = styled.div`
  ${sharedStyles};
  left: 50px;
  bottom: 164px;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  height: 4.875rem;
  padding: 0 2rem;
  border-radius: 4.75rem;
  font-size: 1.525rem;
  text-align: center;
  white-space: nowrap;
  animation: ${titleKeyframes} 26.5s;
`;

const StyledIcon = styled.span`
  font-size: 2.375rem;
`;

const StyledTipToast = styled.div`
  ${sharedStyles};
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 0.75rem;
  left: 53px;
  bottom: 164px;
  width: 440px;
  padding: 1.375rem;
  border-radius0: 0.75rem;
  font-size: 1.1875rem;
  line-height: 1.75rem;
  animation: ${tipKeyframes} 26.5s;

  & span {
    font-size: 2rem;
  }
`;

const Wrapper = () => {
  return (
    <>
      <StyledTitleToast>CSS Clean Switch</StyledTitleToast>
      {/* <StyledTipToast>
        <span>💡</span>
        <div>
          Add a background to the pseudo element to debug what's going on.
        </div>
      </StyledTipToast> */}
    </>
  );
};

export default Wrapper;
