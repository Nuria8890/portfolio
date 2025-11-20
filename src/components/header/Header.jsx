import "@/styles/layout/header/Header.scss";
import Menu_hamburguesa from "./Menu_hamburguesa";
import Nav_elements from "./Nav_elements";

function Header({ toggleMenu, menuIsOpen }) {
  return (
    <header className="header">
      <Menu_hamburguesa toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
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
