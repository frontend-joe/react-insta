import styled, { css } from "styled-components";

import frontendjoeXl from "assets/joe-square.png";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

import Feature from "features/reels/Godzilla";

import ReelFlames from "./ReelFlames";
import ReelToast from "./ReelToast";

const StyledWrapper = styled.div`
  @keyframes judder {
    0%,
    70%,
    90%,
    100% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(-0.375rem);
    }
  }

  padding: 124px 53px;

  animation: judder 1s infinite;
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
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledFeature = styled.div`
  ${"" /* width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
   background: #26292c;
  background: trasparent;
  display: grid;
  place-items: center; */}
`;

const StyledCode = styled.div`
  display: grid;
  gap: 12px;
`;

const codeHackStyles = css`
  & pre {
    background: transparent !important;
    overflow: hidden !important;
    font-size: 15.5px !important;
    padding: 0 !important;
  }
`;

const StyledHtml = styled.div`
  ${"" /* width: 240px; */};
  ${codeHackStyles};
`;

const StyledCSS = styled.div`
  width: 484px;
  ${codeHackStyles};
`;

const StyledJavaScript = styled.div``;

const htmlCode = `
<div class="wrapper">
  <img class="godzilla" src="godzilla.png" />
</div>
`;

const cssCode = `
@keyframes move {
  100% {
    transform: translateX(75rem);
  }
}

.wrapper {
  animation: move 20s infinite linear;
}

@keyframes stomp {
  0%,
  70%,
  100% {
    transform: rotate(0);
  }
  60% {
    transform:
      translateY(-2.5rem) rotate(-6deg);
  }
}

.godzilla {
  animation: stomp 1s infinite;
}
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <ReelFlames />
      <ReelToast />
      <StyledTopRight>
        <Feature />
      </StyledTopRight>
      {/* <StyledTitle>
        <span>css clip animation</span>
      </StyledTitle> */}

      <StyledCode>
        <StyledHtml>
          <SyntaxHighlighter wrapLines language="html" style={theme}>
            {htmlCode.trim()}
          </SyntaxHighlighter>
        </StyledHtml>
        <StyledCSS>
          <SyntaxHighlighter wrapLines language="css" style={theme}>
            {cssCode.trim()}
          </SyntaxHighlighter>
        </StyledCSS>
      </StyledCode>
    </StyledWrapper>
  );
};

export default Wrapper;
