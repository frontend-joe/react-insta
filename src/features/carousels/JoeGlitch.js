import styled from "styled-components";

import joeGlitch from "assets/joe-glitch.png";
import joeGlitch1 from "assets/joe-glitch-1.png";
import joeGlitch2 from "assets/joe-glitch-2.png";
import joeGlitch3 from "assets/joe-glitch-3.png";

const StyledWrapper = styled.div``;

const StyledGlitch = styled.div`
  @keyframes glitch {
    0%,
    55.01%,
    100% {
      background: url(${joeGlitch});
      background-size: cover;
    }
    50% {
      background: url(${joeGlitch1});
      background-size: cover;
    }
    52.5% {
      background: url(${joeGlitch2});
      background-size: cover;
    }
    55% {
      background: url(${joeGlitch3});
      background-size: cover;
    }
  }

  width: 14rem;
  height: 14rem;
  background: url(${joeGlitch});
  background-size: cover;
  border-radius: 50% 50% 46% 54% / 51% 47% 53% 49%;
  animation: glitch 3.75s infinite steps(1);
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <StyledGlitch />
    </StyledWrapper>
  );
};

export default Wrapper;
