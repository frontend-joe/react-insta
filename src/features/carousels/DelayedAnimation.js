import styled, { css, keyframes } from "styled-components";

const duration = "2s";

const StyledWrapper = styled.div`
  display: flex;
  gap: 1.125rem;
`;

const sharedIconWrapperStyles = css`
  display: grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #37353d;
`;

const StyledIcon = styled.span`
  color: #17e6eb;
  font-size: 2rem;
`;

const icon1Keyframes = keyframes`
  0% { opacity: 0; }
  30% { opacity: 0; }
  40% { opacity: 1; }
  100% { opacity: 1; }
`;

const StyledIconWrapper1 = styled.div`
  ${sharedIconWrapperStyles};
  animation: ${icon1Keyframes} ${duration};
`;

const icon2Keyframes = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  60% { opacity: 1; }
  100% { opacity: 1; }
`;

const StyledIconWrapper2 = styled.div`
  ${sharedIconWrapperStyles};
  animation: ${icon2Keyframes} ${duration};
`;

const icon3Keyframes = keyframes`
  0% { opacity: 0; }
  70% { opacity: 0; }
  80% { opacity: 1; }
  100% { opacity: 1; }
`;

const StyledIconWrapper3 = styled.div`
  ${sharedIconWrapperStyles};
  animation: ${icon3Keyframes} ${duration};
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledIconWrapper1>
        <StyledIcon className="fas fa-heart" />
      </StyledIconWrapper1>
      <StyledIconWrapper2>
        <StyledIcon className="fas fa-tag" />
      </StyledIconWrapper2>
      <StyledIconWrapper3>
        <StyledIcon className="fas fa-plus" />
      </StyledIconWrapper3>
    </StyledWrapper>
  );
};

export default Wrapper;
