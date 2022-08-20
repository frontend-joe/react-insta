import styled, { css, keyframes } from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 24rem;
  height: 16rem;
  border-radius: 1.5rem;
  background: #0c0b0e;
  color: #ffffff;
  padding: 2rem;
  line-height: 2;
`;

const overlayVisibleStyles = css`
  visibility: visible;
  opacity: 1;
`;

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(p) => p.isVisible && overlayVisibleStyles};

  transition: all 0.35s;
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 8px solid rgba(255, 255, 255, 0.1);
  border-left-color: white;
  margin-bottom: 0.75rem;
  animation: ${spin} 1.25s infinite linear;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #8a44fd;
  display: grid;
  place-items: center;
  text-transform: uppercase;
`;

const Wrapper = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setTimeout(() => {
          setUsers(res?.data);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <StyledWrapper>
      <StyledOverlay isVisible={!users?.length}>
        <StyledSpinner />
      </StyledOverlay>

      {users?.map((user) => (
        <StyledRow>
          <StyledAvatar>{user.name.substr(0, 2)}</StyledAvatar>

          {user.name}
        </StyledRow>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
