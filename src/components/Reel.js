import styled, { css } from "styled-components";

import frontendjoeXl from "assets/joe-square.png";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

import Feature from "features/reels/BubblingTestTube";

import ReelFlames from "./ReelFlames";
import ReelToast from "./ReelToast";

const StyledWrapper = styled.div`
  padding: 124px 50px;
  height: 100%;
  display: grid;
  place-items: center;
`;

const StyledTitle = styled.div`
  position: absolute;
  left: 28px;
  bottom: 100px;
  color: #f9f9f9;
  font-size: 26px;
  margin-top: 14px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StyledFrontendjoe = styled.img`
  position: absolute;
  bottom: -2px;
  right: 6px;
  height: 55px;
  border-radius: 50%;
  border: 4px solid #100f10;
`;

const StyledTopRight = styled.div`
  position: absolute;
  z-index: 0;
  top: 69px;
  left: 266px;
`;

const StyledFeature = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  ${"" /* background: #26292c; */}
  background: trasparent;
  display: grid;
  place-items: center;
  transform: scale(0.875);
`;

const StyledCode = styled.div`
  ${"" /* background: rgba(0, 0, 0, 0.72); */}
  padding-top: 10px;
  ${"" /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */}
`;

const codeHackStyles = css`
  ${"" /* & pre {
    background: transparent !important;
    overflow: hidden !important;
    font-size: 15.5px !important;
    padding: 0 !important;
  } */}

  & pre {
    margin: 0 !important;
    background: transparent !important;
    overflow: hidden !important;
    font-size: 13px !important;
    padding: 0 10px 20px 0 !important;
  }
`;

const StyledHtml = styled.div`
  width: 282px;
  ${codeHackStyles};
`;

const StyledCSS = styled.div`
  ${codeHackStyles};
`;

const StyledJavaScript = styled.div``;

const htmlCode = `
<div class="test-tube">
  <div class="liquid"></div>
  <div class="bubbles"></div>
</div>
`;

const cssCode = `
.test-tube {
  position: relative; overflow: hidden;
  width: 30px; height: 100px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-top: 0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

@keyframes bubble {
  0% { opacity: 0; } 50% { opacity: 0.5; }
  100% {
    opacity: 0; transform: translateY(-50px) scale(2); }
}
.bubbles {
  position: absolute; top: 70px; left: 8px;
  width: 4px; height: 4px; border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  animation: bubble 2s infinite linear;
}
.bubbles::before {
  content: ""; position: inherit; bottom: 10px; left: 2px;
  background: inherit; width: 5px; height: 5px;
  border-radius: inherit;
}

@keyframes move { 50% { transform: translateY(-28px); } }

.liquid {
  position: absolute; top: 60px; left: 0;
  width: 200%; height: 100%; background: #ec3b67;
  animation: move 4s infinite linear;
}
`;

const StyledCodeHeader = styled.div`
  display: flex;
  align-items: center;
  background: #000000;
  padding: 10px 10px 0;
`;

const StyledCodeHeaderTitle = styled.div`
  color: white;
  line-height: 1;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const StyledCodeHeaderColors = styled.div`
  position: relative;
  background: #ec6b5e;
  margin-right: 34px;

  &,
  &::before,
  &::after {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
  }

  &::before {
    background: #f4be4f;
    left: 12px;
  }

  &::after {
    background: #62c554;
    left: 24px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <ReelFlames />
      <ReelToast />
      <StyledTopRight>
        <StyledFeature>
          <Feature />
        </StyledFeature>
      </StyledTopRight>
      {/* <StyledTitle>
        <span>css clip animation</span>
      </StyledTitle> */}

      <StyledCode>
        <StyledHtml>
          {/* <StyledCodeHeader>
            <StyledCodeHeaderColors />
            <StyledCodeHeaderTitle>HTML</StyledCodeHeaderTitle>
          </StyledCodeHeader> */}
          <SyntaxHighlighter wrapLines language="html" style={theme}>
            {htmlCode.trim()}
          </SyntaxHighlighter>
        </StyledHtml>
        <StyledCSS>
          {/* <StyledCodeHeader>
            <StyledCodeHeaderColors />
            <StyledCodeHeaderTitle>CSS</StyledCodeHeaderTitle>
          </StyledCodeHeader> */}
          <SyntaxHighlighter wrapLines language="css" style={theme}>
            {cssCode.trim()}
          </SyntaxHighlighter>
        </StyledCSS>
      </StyledCode>
    </StyledWrapper>
  );
};

export default Wrapper;
