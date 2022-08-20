import styled from "styled-components";

const StyledWrapper = styled.div`
  & .avatar {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-image: url("https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/1-medium-layered-haircut-for-square-face.jpg?w=500&ssl=1");
    background-size: cover;
  }

  & .avatar::after {
    content: "7";
    position: absolute;
    top: 6px;
    right: 0;
    transform: translate(-50%, -50%);
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
      <div className="avatar"></div>
    </StyledWrapper>
  );
};

export default Wrapper;
