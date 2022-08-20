import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    width: 11rem;
    padding: 0.75rem 0;
    font-family: "Euclid Circular A";
    font-size: 1rem;
    border: solid 3px transparent;
    border-radius: 3rem;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(45deg, #fc466b, #3f5efb);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: -11rem 0 1px #100f10 inset;
    color: #f9f9f9;
    transition: box-shadow 0.5s;
  }

  .button:hover {
    box-shadow: 0 0 1px #100f10 inset;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <button class="button">Generate Theme</button>
    </StyledWrapper>
  );
};

export default Wrapper;
