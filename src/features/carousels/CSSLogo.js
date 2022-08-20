import styled from "styled-components";

import cssLogo from "assets/css-logo.png";

const StyledWrapper = styled.div`
  img {
    width: 240px;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <img src={cssLogo}></img>
    </StyledWrapper>
  );
};

export default Wrapper;
