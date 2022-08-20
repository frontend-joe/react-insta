import { useEffect, useState } from "react";
import "./dropdown.css";

const menu = [
  {
    name: "My Profile",
    icon: "account_circle",
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
    name: "Support",
    icon: "support",
  },
];

const MenuButton = ({ menuItem, onClick, isCloseButton }) => (
  <button className="menu-button" onClick={onClick}>
    <span
      className="menu-button-icon material-icons"
      style={{
        background: isCloseButton && "transparent",
        fontSize: isCloseButton && "1.5rem",
      }}
    >
      {menuItem.icon}
    </span>
    <span className="menu-button-text">{menuItem.name}</span>
    {menuItem.menu && !isCloseButton && (
      <span className="material-icons">chevron_right</span>
    )}
  </button>
);

const Menu = ({ menuHeight, isOpen, activeMenu, toggleMenuOpen }) => (
  <div className="wrapper" style={{ height: `${menuHeight}px` }}>
    <div className={`menu-main ${isOpen ? "open" : ""}`} id="mainmenu">
      {menu.map((menuItem) => (
        <>
          <MenuButton
            menuItem={menuItem}
            onClick={() => toggleMenuOpen(menuItem)}
          />
          {menuItem.menu && activeMenu === menuItem.name && (
            <div class="menu-sub" id="submenu">
              <>
                <MenuButton
                  isCloseButton
                  menuItem={{
                    ...menuItem,
                    icon: "arrow_back",
                  }}
                  onClick={() => toggleMenuOpen(menuItem)}
                />
                {menuItem.menu.map((subMenuItem) => (
                  <MenuButton menuItem={subMenuItem} />
                ))}
              </>
            </div>
          )}
        </>
      ))}
    </div>
  </div>
);

const Wrapper = ({ className }) => {
  const [isOpen, setOpen] = useState();
  const [menuHeight, setMenuHeight] = useState();
  const [activeMenu, setActiveMenu] = useState();

  const toggleMenuOpen = ({ menu, name }) => {
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
      <Menu
        menuHeight={menuHeight}
        isOpen={isOpen}
        activeMenu={activeMenu}
        toggleMenuOpen={toggleMenuOpen}
      />
    </div>
  );
};

export default Wrapper;
