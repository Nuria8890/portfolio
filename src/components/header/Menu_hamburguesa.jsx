import "@/styles/layout/header/Menu_hamburguesa.scss";
import { CgMenuRound } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Nav_elements from "./Nav_elements";

function Menu_hamburguesa({ toggleMenu, menuIsOpen }) {
  const openCloseMenu = menuIsOpen ? "menu__open" : "menu__close";

  return (
    <>
      <CgMenuRound className="menu__icon__open" onClick={toggleMenu} />

      <nav className={openCloseMenu}>
        <IoIosCloseCircleOutline
          className="menu__icon__close"
          onClick={toggleMenu}
        />
        <Nav_elements classElement={"menu__nav-element"} />
      </nav>
    </>
  );
}

export default Menu_hamburguesa;
