import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  overflow: hidden;
  width: 200px;
  background: white;
  border-radius: 0.25rem;
  max-height: ${(p) => (p.isOpen ? "100px" : "3rem")};
  transition: max-height 0.35s;
`;

const StyledHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0 1rem;
  height: 3rem;
  width: 100%;
  background: transparent;
  border: 0;
`;

const StyledHeaderText = styled.span`
  font-size: 1rem;
`;

const StyledHeaderIcon = styled.button`
  background: transparent;
  border: 0;
  font-size: 22px;
  transform: rotate(${(p) => (p.isOpen ? "-180deg" : 0)});
  transition: transform 0.35s;
`;

const StyledContent = styled.div`
  padding: 0 1rem;
  display: flex;
  height: 2rem;
  font-size: 0.875rem;
  opacity: 0.65;
`;

const Wrapper = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledHeader onClick={() => setOpen(!isOpen)}>
        <StyledHeaderText>See more info</StyledHeaderText>
        <StyledHeaderIcon isOpen={isOpen} className="uil uil-angle-down" />
      </StyledHeader>
      <StyledContent>First collapsible panel</StyledContent>
    </StyledWrapper>
  );
};

export default Wrapper;
