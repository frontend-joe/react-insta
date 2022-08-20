import styled, { css } from "styled-components";

import frontendjoeXl from "assets/joe-square.png";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

import Feature from "features/reels/CleanSwitch";

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
  top: 180px;
  left: 263px;
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
  transform: scale(1.125);
`;

const StyledCode = styled.div`
  ${"" /* background: rgba(0, 0, 0, 0.72); */}
  padding-top: 10px;
  width: 100%;
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
    font-size: 15.25px !important;
    padding: 0 10px 20px 0 !important;
  }
`;

const StyledHtml = styled.div`
  ${codeHackStyles};
`;

const StyledCSS = styled.div`
  ${codeHackStyles};
`;

const StyledJavaScript = styled.div``;

const htmlCode = `
<input id="switch" type="checkbox" />
<label for="switch">
  <span class="handle"></span>
</label>
`;

const cssCode = `
input {
  position: absolute;
  transform: scale(0);
}

label {
  width: 72px;
  height: 40px;
  padding: 4px;
  background: #333031;
}

input:checked ~ label { background: #10b395; }

input:checked ~ label .handle {
  transform: translateX(32px);
}

label, .handle { transition: all 0.4s; }

.handle {
  width: 32px;
  height: 32px;
  background: #100f10;
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
