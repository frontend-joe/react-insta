import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    padding: 0.75rem 2.25rem;
    border-radius: 1.5rem;
    background: linear-gradient(to right, #eb3349, #f45c43);
    color: #f9f9f9;
    font-family: "Euclid Circular A";
    font-size: 1rem;
  }

  @keyframes shake {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }

  .button:hover {
    animation: shake 0.025s infinite linear alternate;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button class="button">Delete Project</button>
    </StyledWrapper>
  );
};

export default Wrapper;
