import styled, { css } from "styled-components";

import { useState } from "react";

const StyledWrapper = styled.div`
  width: 200px;
  height: 3rem;
`;

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 3rem;
  font-size: 16px;
  background: #f0f5f3;
  color: #100f10;

  & > span {
    font-size: 20px;
  }
`;

const StyledCloseButton = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 2;
  transform: translateY(-50%);
  padding: 0;
  pointer-events: none;

  & > span {
    font-size: 20px;
    color: #100f10;
  }
`;

const menuOpenStyles = css`
  visibility: visible;
  opacity: 1;
`;

const StyledMenu = styled.div`
  overflow: hidden;
  position: absolute;
  top: 3.5rem;
  width: 100%;
  background: #f0f5f3;
  visibility: hidden;
  opacity: 0;

  ${(p) => p.isOpen && menuOpenStyles};

  transition: all 0.35s;
`;

const StyledSubMenuCloseButton = styled.span`
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 2;
  padding: 0;
  pointer-events: none;

  & > span {
    font-size: 24px;
    color: #100f10;
  }
`;

const StyledMenuItem = styled.div``;

const StyledMenuItemButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 3rem;
  font-size: 16px;
  background: #f0f5f3;
  color: #100f10;
  text-transform: capitalize;

  & > span {
    font-size: 20px;
  }
`;

const subMenuOpenStyles = css`
  transform: translateX(0);
`;

const StyledMenuItemSubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(-100%);

  ${(p) => p.isOpen && subMenuOpenStyles};

  transition: all 0.35s;
`;

const StyledMenuItemSubMenuHeader = styled.div`
  background: red;
  color: white;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 0 0 10px;
  width: 100%;
  height: 3rem;
  font-size: 16px;
  background: #8f44fd;
  color: #f7f7f7;
  text-transform: capitalize;

  & > span {
    font-size: 20px;
  }
`;

const items = [
  {
    name: "appearance",
    icon: "smile",
    subItems: [
      {
        name: "theme",
        icon: "abacus",
      },
      {
        name: "interface",
        icon: "apps",
      },
      {
        name: "colors",
        icon: "paint-tool",
      },
    ],
  },
  {
    name: "interface",
    icon: "sliders-v-alt",
    subItems: [
      {
        name: "theme",
        icon: "abacus",
      },
      {
        name: "interface",
        icon: "apps",
      },
      {
        name: "colors",
        icon: "paint-tool",
      },
    ],
  },
  {
    name: "editor",
    icon: "smile",
    subItems: [
      {
        name: "theme",
        icon: "abacus",
      },
      {
        name: "interface",
        icon: "apps",
      },
      {
        name: "colors",
        icon: "paint-tool",
      },
    ],
  },
  {
    name: "logout",
    icon: "sliders-v-alt",
    showDivider: true,
  },
];

const Wrapper = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const clearActive = () => setActiveItem(null);

  return (
    <StyledWrapper className={className}>
      <StyledDropdown>
        <StyledButton onClick={toggleOpen}>
          <span className="uil uil-setting" />
          My Settings
        </StyledButton>
        <StyledCloseButton>
          <span className={`uil uil-ellipsis-v`} />
        </StyledCloseButton>
        <StyledMenu isOpen={isOpen}>
          {items.map((item) => (
            <StyledMenuItem key={item.name}>
              <StyledMenuItemButton
                onClick={() =>
                  activeItem === item.name
                    ? setActiveItem(null)
                    : setActiveItem(item.name)
                }
              >
                <span className={`uil uil-${item.icon}`} />
                {item.name}
              </StyledMenuItemButton>
              <StyledMenuItemSubMenu isOpen={activeItem === item.name}>
                <StyledMenuItemSubMenuHeader onClick={clearActive}>
                  <span className="uil uil-arrow-left" />
                  {item.name}
                </StyledMenuItemSubMenuHeader>
                {item?.subItems?.map((subItem) => (
                  <StyledMenuItemButton
                    key={subItem.name}
                    onClick={clearActive}
                    showDivider={subItem.showDivider}
                  >
                    <span className={`uil uil-${subItem.icon}`} />
                    {subItem.name}
                  </StyledMenuItemButton>
                ))}
              </StyledMenuItemSubMenu>
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </StyledDropdown>
    </StyledWrapper>
  );
};

export default Wrapper;
