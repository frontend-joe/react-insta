import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  height: 5rem;
  width: 20rem;
  border-radius: 2.5rem;
  background: #212025;
`;

const StyledLabel = styled.label`
  flex: 1 1 auto;
`;

const StyledButton = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ffffff;
  height: 3rem;
  padding: 0;
  border-radius: 2rem;
`;

const StyledButtonIcon = styled.span`
  font-size: 1.5rem;
  transition: all 0.35s;
`;

const StyledButtonText = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%) translateX(20px);
  font-size: 1rem;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledButton} {
    background: #9e9357;
  }

  &:checked ~ ${StyledButton} ${StyledButtonText} {
    visibility: visible;
    opacity: 1;
    transform: translateY(-50%) translateX(40px);
  }

  &:checked ~ ${StyledButton} ${StyledButtonIcon} {
    transform: translateX(-24px);
  }
`;

const tabs = [
  {
    name: "Stats",
    icon: "chart",
  },
  {
    name: "Find",
    icon: "search",
  },
  {
    name: "Lists",
    icon: "list-ul",
  },
];

const FooterNav = ({ className, tabs }) => {
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

const Wrapper = ({ className }) => {
  return <FooterNav className={className} tabs={tabs} />;
};

export default Wrapper;
