import "@/styles/layout/header/Menu_hamburguesa.scss";
import { CgMenuRound } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Menu_hamburguesa({ toggleMenu, menuIsOpen }) {
  const openCloseMenu = menuIsOpen ? "menu__open" : "menu__close";
  const elements = ["Sobre mi", "Proyectos", "Contacta"];
  return (
    <>
      <CgMenuRound className="menu__icon__open" onClick={toggleMenu} />

      <nav className={openCloseMenu}>
        <IoIosCloseCircleOutline
          className="menu__icon__close"
          onClick={toggleMenu}
        />
        <li>
          {elements.map((element) => (
            <ul className="menu__nav-element" key={element}>
              {element}
            </ul>
          ))}
        </li>
      </nav>
    </>
  );
}

export default Menu_hamburguesa;
