import styled, { keyframes } from "styled-components";

const wrapperKeyframes = keyframes`
  0%, 76%, 100% {
    opacity: 0;
  }
  83%, 93% {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 143px;
  animation: ${wrapperKeyframes} 13.75s infinite;
`;

const circleMove = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: rotate(-5deg) translateY(-210px);
    opacity: 0;
  }
`;

const StyledCircle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform-origin: 100% 100%;
  animation: ${circleMove} 1.5s infinite ease-out;
`;

const StyledEmoji = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
`;

const emojiArray1 = [
  {
    emojiSize: "41px",
    emojiCircleSize: "300px",
  },
  {
    emojiSize: "29px",
    emojiCircleSize: "500px",
  },
  {
    emojiSize: "43px",
    emojiCircleSize: "300px",
  },
  {
    emojiSize: "32px",
    emojiCircleSize: "500px",
  },
];

const emojiArray2 = [
  {
    emojiSize: "32px",
    emojiCircleSize: "300px",
  },
  {
    emojiSize: "47px",
    emojiCircleSize: "500px",
  },
  {
    emojiSize: "34px",
    emojiCircleSize: "300px",
  },
  {
    emojiSize: "41px",
    emojiCircleSize: "500px",
  },
];

const emojiArray3 = [
  {
    emojiSize: "41px",
    emojiCircleSize: "400px",
  },
  {
    emojiSize: "38px",
    emojiCircleSize: "200px",
  },
  {
    emojiSize: "49px",
    emojiCircleSize: "400px",
  },
  {
    emojiSize: "39px",
    emojiCircleSize: "600px",
  },
];

const Wrapper = () => {
  return (
    <StyledWrapper>
      {emojiArray1?.map((emoji, index) => (
        <StyledCircle
          style={{
            right: "0px",
            animationDelay: `${index === 0 ? 0 : index * 0.125}s`,
            width: "300px",
            height: emoji.emojiCircleSize,
          }}
        >
          <StyledEmoji style={{ fontSize: emoji.emojiSize }}>🔥</StyledEmoji>
        </StyledCircle>
      ))}
      {emojiArray2?.map((emoji, index) => (
        <StyledCircle
          style={{
            right: "-19px",
            animationDelay: `${index === 0 ? 0 : index * 0.125}s`,
            width: "300px",
            height: emoji.emojiCircleSize,
          }}
        >
          <StyledEmoji style={{ fontSize: emoji.emojiSize }}>🔥</StyledEmoji>
        </StyledCircle>
      ))}
      {emojiArray3?.map((emoji, index) => (
        <StyledCircle
          style={{
            right: "-9px",
            animationDelay: `${index === 0 ? 0 : index * 0.125}s`,
            width: "300px",
            height: emoji.emojiCircleSize,
          }}
        >
          <StyledEmoji style={{ fontSize: emoji.emojiSize }}>🔥</StyledEmoji>
        </StyledCircle>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
