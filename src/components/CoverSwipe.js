import { rgba } from "polished";
import styled from "styled-components";

import arrow from "assets/arrow-cover.png";

const StyledWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 82px;
`;

const StyledSvgWrapper = styled.div`
  flex: 0 0 30px;
  height: 30px;
`;

const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

const StyledPath = styled.path`
  fill: #f5f5f5;
`;

const StyledText = styled.div`
  margin-left: 8px;
  font-size: 29px;
  font-weight: 500;
  color: #cccccc;
`;

const StyledArrow = styled.img`
  width: 23px;
  transform: translateY(2px);
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledArrow src={arrow} />
      {/* <StyledSvgWrapper>
        <StyledSvg
          viewBox="0 0 69 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <StyledPath
        opacity="0.8"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 63.1034C12 66.3608 14.6402 69 17.8966 69H59.1724C64.5997 69 69 64.6006 69 59.1724V17.8966C69 14.6392 66.3598 12 63.1034 12V57.2069C63.1034 60.4642 60.4632 63.1034 57.2069 63.1034H12Z"
          />
          <StyledPath
        opacity="0.8"
        d="M0 5.89655C0 2.63998 2.63998 0 5.89655 0H51.1034C54.36 0 57 2.63998 57 5.89655V51.1034C57 54.36 54.36 57 51.1034 57H5.89655C2.63998 57 0 54.36 0 51.1034V5.89655Z"
          />
        </StyledSvg>
      </StyledSvgWrapper> */}
      <StyledText>Part One</StyledText>
    </StyledWrapper>
  );
};

export default Wrapper;
