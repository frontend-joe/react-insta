import styled from "styled-components";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";

import routes from "routes";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #100f10;
`;

const StyledNavLink = styled(NavLink)`
  color: ${rgba("white", 0.45)};

  &.active {
    color: ${rgba("white", 0.96)};
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      {routes.map((r) => (
        <StyledNavLink key={r.name} exact to={r.path}>
          {r.name}
        </StyledNavLink>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
