import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    padding: 0.75rem 2rem;
    border-radius: 1.5rem;
    border: 2px solid #fff503;
    background: transparent;
    color: #f9f9f9;
    font-family: "Euclid Circular A";
    font-size: 1rem;
    box-shadow: 0px 0px 0px 0px rgba(255, 245, 3, 0);
    transition: all 0.5s;
  }

  .button:hover {
    border-color: transparent;
    box-shadow: 0 0 1.5rem 0.25rem #fff503;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button class="button">Learn Javascript</button>
    </StyledWrapper>
  );
};

export default Wrapper;
