import styled from "styled-components";
import { rgba } from "polished";
import frontendjoe from "assets/frontendjoe-xl2.png";
import arrow from "assets/arrow-white-transparent.png";
import instaResult from "assets/insta-result-2022.png";

import Example from "features/carousels/CssFooterNav";
import Example2 from "features/carousels/motionPath/Example2";

const StyledCoverTest = styled.img`
  position: absolute;
  z-index: 20;
  left: -100px;
  top: 0;
  height: 100%;
`;

const StyledTop = styled.div`
  position: relative;
  z-index: 3;
  height: 75px;
  max-height: 75px;
  padding: 0 24px;
  font-size: 32px;
  font-weight: 500;
  color: ${rgba("white", 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMiddle = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBottom = styled.div`
  position: relative;
  z-index: 30;
  height: 75px;
  min-height: 75px;
  max-height: 75px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAuthor = styled.img`
  height: 46px;
`;

const StyledArrow = styled.img`
  height: 26px;
  transform: translateY(3px);
`;

const StyledExample = styled(Example)`
  transform: scale(1);
`;

const StyledExample2 = styled(Example2)`
  position: absolute;
  top: 350px;
  left: -500px;
  transform: scale(1);
`;

const Wrapper = () => {
  return (
    <>
      {false && <StyledCoverTest src={instaResult} />}
      <StyledTop></StyledTop>
      <StyledMiddle>
        <StyledExample transition={3} />
      </StyledMiddle>
      <StyledBottom>
        {/* <StyledAuthor src={frontendjoe} /> */}
        {/* <StyledArrow src={arrow} /> */}
      </StyledBottom>
    </>
  );
};

export default Wrapper;
