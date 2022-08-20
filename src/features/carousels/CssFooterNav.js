import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  gap: 2rem;
  height: 6rem;
  width: 16rem;
  border-radius: 1.5rem;
  background: #302e3a;

  .tab label {
    background: #eee;
  }
  .tab [type="radio"] {
    opacity: 0;
  }
  [type="radio"]:checked ~ button {
    background: white;
    z-index: 2;
  }
`;

const StyledLabel = styled.label``;

const StyledButton = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffffff;
  padding: 0.5rem;
`;

const StyledButtonIcon = styled.span`
  transition: all 0.35s;
`;

const StyledButtonText = styled.span`
  font-size: 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  color: #76b0fd;
  visibility: hidden;
  opacity: 0;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledButton} {
    color: #76b0fd;
  }

  &:checked ~ ${StyledButton} ${StyledButtonText} {
    visibility: visible;
    opacity: 1;
  }

  &:checked ~ ${StyledButton} ${StyledButtonIcon} {
    transform: translateY(-9px);
  }
`;

const tabs = [
  {
    name: "Likes",
    icon: "heart",
  },
  {
    name: "Shares",
    icon: "location-arrow",
  },
  {
    name: "Saves",
    icon: "bookmark",
  },
];

const Wrapper = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      {tabs.map((tab) => (
        <StyledLabel for={tab.name} key={tab.name}>
          <StyledInput type="radio" id={tab.name} name="tab-group-1" />
          <StyledButton>
            <StyledButtonIcon className={`uil uil-${tab.icon}`} />
            <StyledButtonText>{tab.name}</StyledButtonText>
          </StyledButton>
        </StyledLabel>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
