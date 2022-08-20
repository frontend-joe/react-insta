import styled from "styled-components";
import { rgba } from "polished";
import frontendjoe from "assets/frontendjoe-md.png";
import arrow from "assets/arrow.png";

import Example from "features/carousels/ThePerfectButton";

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
  flex-direction: column;
`;

const StyledExample = styled.div`
  ${"" /* height: 500px; */}
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.1);
`;

const StyledTextWrapper = styled.div`
  position: absolute;
`;

const StyledTitle = styled.div`
  padding-top: 130px;
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledDescription = styled.div`
  color: ${rgba("white", 0.67)};
  font-size: 20px;
  text-align: center;
  max-width: 500px;
  margin-bottom: 50px;
`;

const StyledCode = styled.img`
  position: absolute;
  top: 420px;
  transform: scale(0.42);
  transform-origin: top;
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
  height: 45px;
`;

const StyledArrow = styled.img`
  height: 32px;
`;

const Wrapper = ({
  useCaseTitle,
  useCaseDescription,
  useCaseCode,
  useCaseComponent,
}) => {
  return (
    <>
      <StyledTop></StyledTop>
      <StyledMiddle>
        <StyledTextWrapper>
          <StyledTitle>{useCaseTitle}</StyledTitle>
          <StyledDescription>{useCaseDescription}</StyledDescription>
        </StyledTextWrapper>
        <StyledExample>{useCaseComponent}</StyledExample>
        <StyledCode src={useCaseCode} />
      </StyledMiddle>
      <StyledBottom>
        {/* <StyledAuthor src={frontendjoe} />
        <StyledArrow src={arrow} /> */}
      </StyledBottom>
    </>
  );
};

export default Wrapper;
