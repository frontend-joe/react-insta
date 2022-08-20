import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1.5rem;
    background: linear-gradient(-45deg, #9925ea, #338aff, #9925ea);
    background-size: 400%;
    background-position: 90% 0;
    color: #ffffff;
    transition: background 0.8s;
  }

  .button:hover {
    background-position: 185% 50%;
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
