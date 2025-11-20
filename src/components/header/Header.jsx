import "@/styles/layout/header/Header.scss";
import Menu_hamburguesa from "./Menu_hamburguesa";

function Header({ toggleMenu, menuIsOpen }) {
  return (
    <header className="header">
      <Menu_hamburguesa toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      {/* <nav className="header__nav">
        <li className="header__nav__list">
          <ul>Sobre mi</ul>
          <ul>Proyectos</ul>
          <ul>Contacta</ul>
        </li>
      </nav> */}
    </header>
  );
}

export default Header;
