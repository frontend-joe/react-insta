import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  gap: 2rem;

  & .icon {
    position: relative;
    font-size: 48px;
    color: #f9f9f9;
  }

  & .icon::after {
    content: "7";
    position: absolute;
    top: 6px;
    left: 0;
    display: grid;
    place-items: center;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff18f5;
    color: #f9f9f9;
    font-size: 8px;
  }
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <div class="icon uil uil-instagram"></div>
      <div class="icon uil uil-twitter-alt"></div>
      <div class="icon uil uil-apps"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
