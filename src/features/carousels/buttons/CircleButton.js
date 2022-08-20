import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #3d384e;
    background-size: 400%;
    color: #ffffff;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      83.2deg,
      rgba(150, 93, 233, 1) 10.8%,
      rgba(99, 88, 238, 1) 94.3%
    );
    transition: all 0.475s;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="button">
        <span className="button-content">Download</span>
      </button>
    </StyledWrapper>
  );
};

export default Wrapper;
