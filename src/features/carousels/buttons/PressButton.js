import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    height: 3.5rem;
    padding: 0 2rem;
    border-radius: 0.375rem;
    background: #4503dc;
    color: #ffffff;
    box-shadow: 0 0.4rem 0 0 #3700b8;
    letter-spacing: 3px;
    transition: all 0.3s;
  }

  .button:active {
    transform: translateY(0.3rem);
    box-shadow: 0 0.2rem 0 0 #3700b8;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button className="button">LOGIN</button>
    </StyledWrapper>
  );
};

export default Wrapper;
