import styled from "styled-components";

import dashboard from "assets/dashboard.png";

const StyledWrapper = styled.div``;

const StyledSidebar = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: red;
`;

const StyledDashboard = styled.img`
  margin-left: 180px;
  width: 360px;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledSidebar>Items</StyledSidebar>
      <StyledDashboard src={dashboard} />
    </StyledWrapper>
  );
};

export default Wrapper;
