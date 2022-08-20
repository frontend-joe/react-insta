import { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import CoverSwipe from "./CoverSwipe";
import CoverDiamond from "./CoverDiamond";

import frontendjoeXl from "assets/frontendjoe-xl2.png";
import instaCover from "assets/insta-cover-2022.png";

import Feature from "features/carousels/gsap/GsapPart1";

const StyledFeature = styled(Feature)`
  ${"" /* position: absolute;
  z-index: 5;
  left: 297px;
  top: 478px;
  transform: scale(1.125); */}
`;

const StyledCoverTest = styled.img`
  position: absolute;
  z-index: 20;
  left: 20%;
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
`;

const StyledSeries = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 34px;
  padding: 3px 14px;
  border-radius: 20px;
  background: #3e3d42;
`;

const StyledSeriesText = styled.span`
  color: #f5f5f5;
  font-size: 17px;
`;

const StyledSeriesEmoji = styled.img`
  width: 28px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: inherit;
  padding: 4px;
`;

const StyledMiddle = styled.div`
  width: 600px;
  height: 600px;
  padding: 0 24px;
`;

const StyledTitleBlock = styled.div`
  padding-top: 78px;
`;

const StyledBigText = styled.div`
  font-size: 86px;
  margin-bottom: 17px;
  font-weight: 600;
  line-height: 0.925;
  letter-spacing: 1px;
  color: ${rgba("white", 0.96)};
`;

const StyledHighlight = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 6px;
  left: 5px;
  border-radius: 4px;
  width: calc(100% - 5px);
  height: 8px;
  background: #8f44fd;
`;

const StyledTitleWord = styled.span`
  position: relative;
  z-index: 2;
`;

const StyledWordWrapper = styled.span`
  position: relative;
`;

const StyledCoverImage = styled.img`
  position: absolute;
  top: ${(p) => p.coverImageY}px;
  left: ${(p) => p.coverImageX}px;
  height: ${(p) => p.coverImageSize}px;
`;

const StyledBottom = styled.div`
  height: 75px;
  min-height: 75px;
  max-height: 75px;
  padding: 0 24px;
  display: flex;
  align-items: center;
`;

const StyledAuthor = styled.img`
  height: 49px;
  transform: translateY(-6px);
`;

const Wrapper = ({
  series,
  title1,
  title2,
  title3,
  highlight,
  coverImage,
  coverImageX,
  coverImageY,
  coverImageSize,
}) => {
  const title1Words = title1.split(" ");
  const title2Words = title2.split(" ");
  const title3Words = title3.split(" ");

  const rows = [title1Words, title2Words, title3Words];

  return (
    <>
      {true && <StyledFeature size="80px" transition={2} />}

      <CoverDiamond diamondColor="#242329" diamondSize={648} x={-376} y={0} />
      <CoverDiamond diamondColor="#46454A" diamondSize={44} x={330} y={60} />
      <CoverDiamond diamondColor="#242329" diamondSize={150} x={430} y={180} />
      <CoverDiamond diamondColor="#46454A" diamondSize={60} x={70} y={606} />

      {false && <StyledCoverTest src={instaCover} />}
      {coverImage && (
        <StyledCoverImage
          src={coverImage}
          coverImageX={coverImageX}
          coverImageY={coverImageY}
          coverImageSize={coverImageSize}
        />
      )}
      <StyledTop>
        <StyledSeries>
          {/* <StyledSeriesEmoji src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" /> */}
          <StyledSeriesText>{series}</StyledSeriesText>
        </StyledSeries>
      </StyledTop>
      <StyledMiddle>
        <StyledTitleBlock>
          {rows.map((row, rowIndex) => (
            <StyledBigText>
              {row.map((word, wordIndex) => (
                <>
                  <StyledWordWrapper>
                    <StyledTitleWord>{word}</StyledTitleWord>
                    {wordIndex === highlight.wordIndex &&
                      rowIndex === highlight.rowIndex && <StyledHighlight />}
                  </StyledWordWrapper>{" "}
                </>
              ))}
            </StyledBigText>
          ))}
        </StyledTitleBlock>
        <CoverSwipe />
      </StyledMiddle>
      <StyledBottom>
        <StyledAuthor src={frontendjoeXl} />
      </StyledBottom>
    </>
  );
};

export default Wrapper;
