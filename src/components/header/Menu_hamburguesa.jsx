import { CgMenuRound } from "react-icons/cg";
import "@/styles/layout/header/Menu_hamburguesa.scss";

function Menu_hamburguesa({ toggleMenu }) {
  return <CgMenuRound className="menu__icon" onClick={toggleMenu} />;
}

export default Menu_hamburguesa;
