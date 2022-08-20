import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";

import CoverSwipe from "./CoverSwipe";
import CoverDiamond from "./CoverDiamond";

import frontendjoeXl from "assets/frontendjoe-xl.png";
import instaCover from "assets/insta-cover.png";

import Feature from "features/carousels/SvgPreloader";

const StyledCoverTest = styled.img`
  position: absolute;
  z-index: 20;
  left: 100%;
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

const StyledMiddle = styled.div`
  width: 600px;
  height: 600px;
  padding: 0 24px;
`;

const StyledTitleBlock = styled.div`
  padding-top: 78px;
`;

const StyledBigText = styled.div`
  font-size: 93px;
  margin-bottom: 17px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1px;
  color: ${rgba("white", 0.96)};
`;

const StyledHighlight = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 14px;
  left: -10px;
  width: calc(100% + 20px);
  height: 48px;
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
  height: 54px;
  transform: translateY(-6px);
`;

const StyledBurger = styled.button`
  font-size: 44px;
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  transform: translateX(-6px);
`;

const StyledContent = styled.div`
  position: relative;
  transform: translateX(${(p) => (p.isBurgerOpen ? "0" : "72px")});
  transition: transform 0.45s;
`;

const StyledBurgerMenu = styled.div`
  background: #3b3b3b;
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(${(p) => (p.isBurgerOpen ? "0" : "-72px")});
  transition: transform 0.45s;
`;

const StyledBurgerMenuButton = styled.button`
  color: ${(p) => (p.isActive ? "#a287cb" : "white")};
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 40px;
  padding: 12px 0;
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(16px);}
  100% { opacity: 1; transform: translateY(0)};
`;

const StyledFadeIn = styled.div`
  animation: ${fadeIn} 0.65s;
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
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const title1Words = title1.split(" ");
  const title2Words = title2.split(" ");
  const title3Words = title3.split(" ");

  const rows = [title1Words, title2Words, title3Words];

  return (
    <>
      {false && <Feature />}

      <CoverDiamond diamondColor="#242329" diamondSize={608} x={-376} y={0} />
      <CoverDiamond diamondColor="#46454A" diamondSize={44} x={330} y={60} />
      <CoverDiamond diamondColor="#242329" diamondSize={150} x={430} y={180} />
      <CoverDiamond diamondColor="#46454A" diamondSize={60} x={70} y={606} />

      {false && <StyledCoverTest src={instaCover} />}

      <StyledBurgerMenu isBurgerOpen={isBurgerOpen}>
        <StyledBurgerMenuButton
          onClick={() => setActivePage(0)}
          isActive={activePage === 0}
          className="material-icons"
        >
          home
        </StyledBurgerMenuButton>
        <StyledBurgerMenuButton
          onClick={() => setActivePage(1)}
          isActive={activePage === 1}
          className="material-icons"
        >
          bar_chart
        </StyledBurgerMenuButton>
        <StyledBurgerMenuButton
          onClick={() => setActivePage(2)}
          isActive={activePage === 2}
          className="material-icons"
        >
          filter_alt
        </StyledBurgerMenuButton>
      </StyledBurgerMenu>

      <StyledContent isBurgerOpen={!isBurgerOpen}>
        {activePage === 0 && (
          <StyledFadeIn>
            {coverImage && (
              <StyledCoverImage
                src={coverImage}
                coverImageX={coverImageX}
                coverImageY={coverImageY}
                coverImageSize={coverImageSize}
              />
            )}

            <StyledTop>
              <StyledBurger
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className="material-icons"
              >
                {isBurgerOpen ? "menu_open" : "menu"}
              </StyledBurger>
              {series}
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
                            rowIndex === highlight.rowIndex && (
                              <StyledHighlight />
                            )}
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
          </StyledFadeIn>
        )}
        {activePage === 1 && (
          <StyledFadeIn>
            {coverImage && (
              <StyledCoverImage
                src={coverImage}
                coverImageX={coverImageX}
                coverImageY={coverImageY}
                coverImageSize={coverImageSize}
              />
            )}

            <StyledTop>
              <StyledBurger
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className="material-icons"
              >
                {isBurgerOpen ? "menu_open" : "menu"}
              </StyledBurger>
              {series}
            </StyledTop>
            <StyledMiddle>
              <StyledTitleBlock>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>The</StyledTitleWord>
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>Pure</StyledTitleWord>
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>Solution</StyledTitleWord>
                      <StyledHighlight />
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
              </StyledTitleBlock>
              <CoverSwipe />
            </StyledMiddle>
            <StyledBottom>
              <StyledAuthor src={frontendjoeXl} />
            </StyledBottom>
          </StyledFadeIn>
        )}

        {activePage === 2 && (
          <StyledFadeIn>
            {coverImage && (
              <StyledCoverImage
                src={coverImage}
                coverImageX={coverImageX}
                coverImageY={coverImageY}
                coverImageSize={coverImageSize}
              />
            )}

            <StyledTop>
              <StyledBurger
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className="material-icons"
              >
                {isBurgerOpen ? "menu_open" : "menu"}
              </StyledBurger>
              {series}
            </StyledTop>
            <StyledMiddle>
              <StyledTitleBlock>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>Stay</StyledTitleWord>
                      <StyledHighlight />
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>Clean &</StyledTitleWord>
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
                <StyledBigText>
                  <>
                    <StyledWordWrapper>
                      <StyledTitleWord>Simple</StyledTitleWord>
                    </StyledWordWrapper>{" "}
                  </>
                </StyledBigText>
              </StyledTitleBlock>
              <CoverSwipe />
            </StyledMiddle>
            <StyledBottom>
              <StyledAuthor src={frontendjoeXl} />
            </StyledBottom>
          </StyledFadeIn>
        )}
      </StyledContent>
    </>
  );
};

export default Wrapper;
