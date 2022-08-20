import styled from "styled-components";

const StyledWrapper = styled.button`
  background: #732fdf;
  width: 10rem;
  height: 4rem;
  border-radius: 0.325rem;
  font-size: 1rem;
  color: #f7f7f7;
  transition: background 0.5s;

  &:hover {
    background: #bd00ff;
  }
`;

const Wrapper = () => {
  return <StyledWrapper>Hover me</StyledWrapper>;
};

export default Wrapper;
