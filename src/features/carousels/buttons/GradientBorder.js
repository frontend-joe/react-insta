import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    height: 3rem;
    padding: 0 2rem;
    border: solid 3px transparent;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(to right, #ec008c, #fc6767);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0 3rem 1px #100f10 inset;
    color: #f9f9f9;
    font-family: "Euclid Circular A";
    font-size: 1rem;
    transition: box-shadow 0.3s;
  }

  .button:hover {
    box-shadow: 0 0 1px #100f10 inset;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button class="button">Join Now</button>
    </StyledWrapper>
  );
};

export default Wrapper;
