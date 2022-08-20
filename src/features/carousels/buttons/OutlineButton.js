import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    position: relative;
    height: 3rem;
    padding: 0 2rem;
    background: #9925ea;
    color: #ffffff;
    transition: background 0.6s;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    height: 99%;
    border: 3px solid #9925ea;
    box-sizing: border-box;
    transition: all 0.6s;
  }

  .button:hover::before {
    height: calc(100% + 3rem);
    width: calc(100% + 3rem);
    opacity: 0;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="button">Get Started</button>
    </StyledWrapper>
  );
};

export default Wrapper;
