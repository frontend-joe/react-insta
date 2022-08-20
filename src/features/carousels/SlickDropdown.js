import styled from "styled-components";

const StyledWrapper = styled.div`
  .wrapper {
    position: relative;
  }

  .button {
    position: relative;
    z-index: 2;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 230px;
    padding: 0 30px;
    border-radius: 10px;
    color: #f7f7f7;
    background: #322d3a;
  }

  .icon::before,
  .icon::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 11px;
    width: 3px;
    height: 10px;
    border-radius: 1px;
    background: #fff;
    transition: all 0.3s;
  }

  .icon::before {
    transform: translate(-5px, 0) rotate(-45deg);
  }

  .icon::after {
    transform: translate(0, 0) rotate(45deg);
  }

  .text {
    font-size: 19px;
  }

  .icon {
    position: relative;
    width: 20px;
    height: 20px;
    transition: all 0.3s;
  }

  input {
    position: absolute;
    transform: scale(0);
  }

  input:checked ~ .menu ul {
    transform: translateY(0);
  }

  input:checked ~ .button {
    background: #4461fd;
  }

  input:checked ~ .button .icon::before {
    transform: translate(-3px, 0) rotate(-45deg) scaleY(2);
  }

  input:checked ~ .button .icon::after {
    transform: translate(-3px, 0) rotate(45deg) scaleY(2);
  }

  .menu {
    overflow: hidden;
    position: absolute;
    z-index: 1;
    top: 70px;
    left: 0;
    width: 100%;
  }

  ul {
    width: 100%;
    margin: 0;
    padding: 24px 0;
    background: #1f1b25;
    border-radius: 0 0 10px 10px;
    transform: translateY(-100%);
    list-style: none;
    transition: all 0.3s;
  }

  li {
    display: flex;
    align-items: center;
    width: inherit;
    padding: 0 10px;
  }

  a {
    display: flex;
    align-items: center;
    width: inherit;
    height: 44px;
    padding: 0 20px;
    border-radius: 8px;
    font-size: 17px;
    color: #f7f7f7;
    cursor: pointer;
    transition: all 0.25s;
  }

  li:not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover {
    background: #312b3a;
  }
`;

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <div class="wrapper">
        <input type="checkbox" id="input" />
        <label for="input" class="button">
          <span class="text">My Settings</span>
          <span class="icon"></span>
        </label>
        <div class="menu">
          <ul>
            <li>
              <a>Appearance</a>
            </li>
            <li>
              <a>Account Privacy</a>
            </li>
            <li>
              <a>Friend Requests</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Wrapper;
