import "@/styles/layout/header/Header.scss";
import logo from "@/assets/background_cloud.webp";
import Menu_hamburguesa from "./Menu_hamburguesa";
import Nav_elements from "./Nav_elements";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Header({
  handleToggleMenu,
  menuIsOpen,
  handleToogleMode,
  isModeLight,
}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo clouds" />

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
      />
      <nav className="header__nav">
        <Nav_elements
          classList={"header__nav__list"}
          classElement={"header__nav__list__element"}
        />
      </nav>
    </header>
  );
}

export default Header;
