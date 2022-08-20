import styled from "styled-components";

const longShadow = () => {
  let val = "0 0 0 #693AD0";

  for (var i = 0; i < 100; i++) {
    val += `,${i}px ${i}px 0 #693AD0`;
  }

  return val;
};

const StyledWrapper = styled.div`
  transform: translateY(-50px);
  display: flex;
  gap: 1rem;
`;

const StyledIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #8a44fd;
  overflow: hidden;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.35s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const StyledIcon = styled.span`
  text-shadow: ${longShadow};
  font-size: 44px;
  color: #ffffff;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <StyledIconWrapper>
        <StyledIcon className="uil uil-instagram" />
      </StyledIconWrapper>

      <StyledIconWrapper>
        <StyledIcon className="uil uil-facebook-f" />
      </StyledIconWrapper>

      <StyledIconWrapper>
        <StyledIcon className="uil uil-twitter" />
      </StyledIconWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
