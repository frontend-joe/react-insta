import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    width: 280px;
    animation: spin 20s infinite linear;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
    </StyledWrapper>
  );
};

export default Wrapper;
