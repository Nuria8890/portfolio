import "@/styles/layout/header/Menu_hamburguesa.scss";
import { CgMenuRound } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Nav_elements from "./Nav_elements";

function Menu_hamburguesa({ handleToggleMenu, menuIsOpen }) {
  const openCloseMenu = menuIsOpen ? "menu__open" : "menu__close";

  return (
    <>
      <CgMenuRound className="menu__icon__open" onClick={handleToggleMenu} />

      <nav className={openCloseMenu}>
        <IoIosCloseCircleOutline
          className="menu__icon__close"
          onClick={handleToggleMenu}
        />
        <Nav_elements classElement={"menu__nav-element"} />
      </nav>
    </>
  );
}

export default Menu_hamburguesa;
