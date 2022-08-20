import styled from "styled-components";

const StyledWrapper = styled.input`
  border: 0;
  background: black;
  color: white;
  outline: none;
  height: 3rem;
  width: 12rem;
  text-indent: 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: box-shadow 0.35s;

  &:focus {
    box-shadow: 0 0 0 4px #8659e9;
  }
`;

const Wrapper = () => {
  return <StyledWrapper placeholder="Focus Me" />;
};

export default Wrapper;
