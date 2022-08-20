import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 16rem;
  background: #212025;
  border-radius: 0.25rem;
  transition: height 0.3s;
`;

const colorBackground = "#212025";
const colorForeground = "#35343a";

const StyledMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  color: #f9f9f9;

  &:hover {
    background: #2a292e;
  }
`;

const StyledMenuButtonIcon = styled.span`
  flex: 0 0 2.25rem;
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: ${colorForeground};
  color: #a39dac;
  font-size: 16px;
`;

const StyledMenuButtonArrow = styled.span``;

const StyledMenuButtonText = styled.span`
  margin-right: auto;
  font-size: 1rem;
`;

const StyledMenuMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transform: translateX(${(p) => p.isOpen && "-100%"});
  transition: all 0.3s;
`;

const StyledMenuSub = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
`;

const SETTINGS = "Settings";
const ANIMALS = "animals";

// const menu = [
//   {
//     name: "My Profile",
//     icon: "person",
//   },
//   {
//     name: "Settings",
//     icon: "settings",
//     menu: [
//       {
//         name: "Appearance",
//         icon: "dark_mode",
//       },
//       {
//         name: "Interface",
//         icon: "laptop",
//       },
//     ],
//   },
//   {
//     name: "Account",
//     icon: "lock",
//     color: "#d5cb5b",
//     menu: [
//       {
//         name: "Security",
//         icon: "vpn_key",
//       },
//       {
//         name: "Archive",
//         icon: "topic",
//       },
//     ],
//   },
//   {
//     name: "Sign Out",
//     icon: "close",
//   },
// ];

const menu = [
  {
    name: "My Profile",
    icon: "person",
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearance",
        icon: "dark_mode",
      },
      {
        name: "Interface",
        icon: "laptop",
      },
    ],
  },
  {
    name: "Account",
    icon: "lock",
    menu: [
      {
        name: "Security",
        icon: "vpn_key",
      },
      {
        name: "Archive",
        icon: "topic",
      },
    ],
  },
  {
    name: "Account",
    icon: "favorite",
    menu: [
      {
        name: "Security",
        icon: "vpn_key",
      },
      {
        name: "Archive",
        icon: "topic",
      },
    ],
  },
  {
    name: "Sign Out",
    icon: "close",
  },
];

const Wrapper = ({ className }) => {
  const [isOpen, setOpen] = useState();
  const [menuHeight, setMenuHeight] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const toggleMenuOpen = (name, menu) => {
    if (!menu) return;
    setActiveMenu(name);
    setOpen(!isOpen);
  };

  useEffect(() => {
    const menuElement = document.getElementById(
      isOpen ? "submenu" : "mainmenu"
    );
    setMenuHeight(menuElement?.clientHeight);
  }, [isOpen]);

  return (
    <div className={className}>
      <StyledWrapper style={{ height: `${menuHeight}px` }}>
        <StyledMenuMain id="mainmenu" isOpen={isOpen}>
          {menu.map((m) => (
            <>
              <StyledMenuButton onClick={() => toggleMenuOpen(m.name, m.menu)}>
                <StyledMenuButtonIcon className="material-icons">
                  {m.icon}
                </StyledMenuButtonIcon>
                <StyledMenuButtonText>{m.name}</StyledMenuButtonText>
                {m.menu && (
                  <StyledMenuButtonArrow className="material-icons">
                    chevron_right
                  </StyledMenuButtonArrow>
                )}
              </StyledMenuButton>

              {m.menu && activeMenu === m.name && (
                <StyledMenuSub id="submenu">
                  <>
                    <StyledMenuButton
                      onClick={() => toggleMenuOpen(m.name, m.menu)}
                    >
                      <StyledMenuButtonIcon className="material-icons">
                        reply
                      </StyledMenuButtonIcon>
                      <StyledMenuButtonText>{m.name}</StyledMenuButtonText>
                    </StyledMenuButton>
                    {m.menu.map((subMenu) => (
                      <StyledMenuButton>
                        <StyledMenuButtonIcon
                          style={{ color: subMenu.color }}
                          className="material-icons"
                        >
                          {subMenu.icon}
                        </StyledMenuButtonIcon>
                        <StyledMenuButtonText>
                          {subMenu.name}
                        </StyledMenuButtonText>
                      </StyledMenuButton>
                    ))}
                  </>
                </StyledMenuSub>
              )}
            </>
          ))}
        </StyledMenuMain>
      </StyledWrapper>
    </div>
  );
};

export default Wrapper;
