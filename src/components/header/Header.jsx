import "@/styles/layout/header/Header.scss";
import logo from "@/assets/antNC.png";
import logoNegro from "@/assets/antNCnegro.png";
import Menu_hamburguesa from "./Menu_hamburguesa";
import Nav_elements from "./Nav_elements";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Header({
  handleToggleMenu,
  menuIsOpen,
  handleToogleMode,
  isModeLight,
  menuNavElements,
}) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={isModeLight ? logo : logoNegro}
        alt="logo antNC"
      />

      <div className="mode">
        {isModeLight ? (
          <FaMoon className="mode__icon" onClick={handleToogleMode} />
        ) : (
          <MdSunny className="mode__icon" onClick={handleToogleMode} />
        )}
      </div>
      <Menu_hamburguesa
        handleToggleMenu={handleToggleMenu}
        menuIsOpen={menuIsOpen}
        classList={"header__nav__list"}
        menuNavElements={menuNavElements}
      />

      <nav className="header__nav">
        {menuNavElements.length > 0 && (
          <Nav_elements
            classList={"header__nav__list"}
            classElement={"header__nav__list__element"}
            elements={menuNavElements}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
