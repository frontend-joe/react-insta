import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    position: relative;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: #16b081;
    color: #ffffff;
    transition: all 0.3s;
  }

  .button::before,
  .button::after {
    content: "";
    position: absolute;
    left: 0;
    transform: scaleX(0);
    width: 100%;
    height: 0.5px;
    background: white;
    transition: all 0.3s;
  }

  .button::before {
    top: 0;
  }

  .button::after {
    bottom: 0;
  }

  .button:hover {
    background: transparent;
    letter-spacing: 2px;
  }

  .button:hover::before,
  .button:hover::after {
    transform: scaleX(1);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="button">Enroll Now</button>
    </StyledWrapper>
  );
};

export default Wrapper;
