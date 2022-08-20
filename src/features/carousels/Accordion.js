import { useState } from "react";
import styled from "styled-components";

const StyledAccordion = styled.div`
  overflow: hidden;
  width: 300px;
  border-radius: 0.5rem;
  background: #2b2930;
  color: #f9f9f9;
`;

const items = [
  {
    name: "Product Info",
    content: (
      <div>
        Some main information about the product the customer is looking at. It
        can contain any type of content as JSX can be applied in the array.
      </div>
    ),
  },
  {
    name: "Item Details",
    content: (
      <div>
        Further details about the product being viewed, it can also contain JSX
        here.
      </div>
    ),
  },
  {
    name: "Dimensions",
    content: <div>H: 24cm W: 48cm D: 10cm</div>,
  },
];

const StyledAccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  background: #212025;
  height: 4rem;
  font-size: 1rem;
  padding: 0 1rem;
  color: inherit;
  cursor: pointer;
`;

const StyledAccordionHeaderIcon = styled.span`
  transform: rotate(${(p) => (p.isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;

const StyledAccordionContent = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(p) => {
    const inner = document.getElementById(p.itemName);
    return `${p.isActive ? inner?.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

const StyledAccordionInner = styled.div`
  position: absolute;
  padding: 1rem;
  color: #c3c1cb;
`;

const AccordionContent = ({ onClick, itemName, itemContent, isActive }) => (
  <>
    <StyledAccordionHeader onClick={onClick}>
      {itemName}
      <StyledAccordionHeaderIcon isActive={isActive} className="material-icons">
        expand_more
      </StyledAccordionHeaderIcon>
    </StyledAccordionHeader>
    <StyledAccordionContent itemName={itemName} isActive={isActive}>
      <StyledAccordionInner id={itemName}>{itemContent}</StyledAccordionInner>
    </StyledAccordionContent>
  </>
);

const Accordion = ({ className }) => {
  const [activeItem, setActiveItem] = useState("Product Info");

  const handleHeaderClicked = (name) => {
    setActiveItem(name === activeItem ? undefined : name);
  };

  return (
    <StyledAccordion className={className}>
      {items.map((item) => {
        const isActive = activeItem === item.name;

        return (
          <AccordionContent
            onClick={() => handleHeaderClicked(item.name)}
            itemName={item.name}
            itemContent={item.content}
            isActive={isActive}
          />
        );
      })}
    </StyledAccordion>
  );
};

export default Accordion;
