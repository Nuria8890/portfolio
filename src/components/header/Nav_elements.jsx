function Nav_elements({ classList, classElement }) {
  const elements = ["Sobre mi", "Proyectos", "Contacta"];
  return (
    <li className={classList}>
      {elements.map((element) => (
        <ul className={classElement} key={element}>
          {element}
        </ul>
      ))}
    </li>
  );
}

export default Nav_elements;
