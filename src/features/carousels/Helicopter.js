import styled from "styled-components";

const StyledWrapper = styled.div`
  transform: rotate(-15deg) scale(0.8);

  @keyframes bounce {
    0%,
    100% {
      transform: translate(0px, -50px);
    }
    50% {
      transform: translate(0px, 50px);
    }
  }

  .helicopter {
    animation: bounce 5s infinite;
  }

  .cockpit {
    position: absolute;
    overflow: hidden;
    z-index: 1;
    width: 195px;
    height: 195px;
    border-radius: 100px 40px 50px 50px;
    background-color: #44d2fd;
  }

  .cockpit:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    left: -25px;
    width: 170px;
    height: 170px;
    border-radius: 40px;
    background-color: #302e37;
  }

  .cockpit:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -60px;
    left: -60px;
    width: 170px;
    height: 170px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  .tail {
    position: absolute;
    top: 50px;
    left: 150px;
    transform-origin: left center;
    border-top: 10px solid transparent;
    border-bottom: 80px solid transparent;
    border-left: 350px solid #2fadd2;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 10px;
  }

  .main {
    position: absolute;
    left: 130px;
    top: -10px;
    width: 40px;
    height: 20px;
    background: #302e37;
  }

  .rotor {
    width: 700px;
    height: 700px;
    border-radius: 350px;
    position: absolute;
    top: -360px;
    left: -200px;
    overflow: hidden;
    background-color: #a299ab;
    opacity: 0.12;
    transform: scaleY(0.075);
    z-index: 2;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .rotator {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 350px;
    animation: rotate 0.6s linear infinite;
  }

  .rotator div {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -350px;
    margin-top: -30px;
    width: 700px;
    height: 80px;
    background-color: #fff;
  }

  .rotor div:nth-child(1) {
    transform: rotate(0deg);
  }

  .rotor div:nth-child(2) {
    transform: rotate(90deg);
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div class="helicopter">
        <div class="cockpit"></div>
        <div class="tail"></div>
        <div class="main"></div>
        <div class="rotor">
          <div class="rotator">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Wrapper;
