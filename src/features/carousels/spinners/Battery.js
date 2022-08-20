import styled from "styled-components";

const StyledWrapper = styled.div`
  @keyframes load {
    100% {
      box-shadow: 64px 0px #fff inset;
    }
  }

  .loader {
    position: relative;
    width: 64px;
    height: 32px;
    border: 2px solid #fff;
    box-shadow: 0 0 #fff inset;
    animation: load 1.5s linear infinite alternate;
  }

  .loader::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 62px;
    width: 4px;
    height: 20px;
    background: #fff;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="loader"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
