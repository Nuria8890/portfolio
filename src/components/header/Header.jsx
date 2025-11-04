import "@/styles/layout/Header.scss";

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <li className="header__nav__list">
          <ul>Sobre mi</ul>
          <ul>Proyectos</ul>
          <ul>Contacta</ul>
        </li>
      </nav>
    </header>
  );
}

export default Header;
