import { CgMenuRound } from "react-icons/cg";
import "@/styles/layout/header/Menu_hamburguesa.scss";

function Menu_hamburguesa({ toggleMenu, menuIsOpen }) {
  return (
    <>
      <CgMenuRound className="menu__icon" onClick={toggleMenu} />

      <nav className={`${menuIsOpen ? "menu__open" : "menu__close"}`}>
        <li className="header__nav__list">
          <ul>Sobre mi</ul>
          <ul>Proyectos</ul>
          <ul>Contacta</ul>
        </li>
      </nav>
    </>
  );
}

export default Menu_hamburguesa;
