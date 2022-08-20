import react from "react";
import { Route as RouterRoute } from "react-router-dom";
import styled, { css } from "styled-components";

const reelDimensions = css`
  width: 540px;
  height: 960px;
  ${"" /* background: linear-gradient(45deg, #252525, #060606); */}
  background: ${(p) =>
    p.background || "linear-gradient(45deg,#260d56,#8401ba)"} ;
}
`;

const StyledFrame = styled.div`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 750px;
  background: ${(p) => p.background};
  ${(p) => p.isReel && reelDimensions};
`;

const Wrapper = ({ path, exact, routeInfo }) => {
  return (
    <RouterRoute path={path} exact={exact}>
      <StyledFrame background={routeInfo.background} isReel={routeInfo?.isReel}>
        {react.createElement(routeInfo.component, routeInfo)}
      </StyledFrame>
    </RouterRoute>
  );
};

export default Wrapper;
