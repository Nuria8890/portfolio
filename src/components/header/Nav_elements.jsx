function Nav_elements({ scssClass }) {
  const elements = ["Sobre mi", "Proyectos", "Contacta"];
  return (
    <li>
      {elements.map((element) => (
        <ul className={scssClass} key={element}>
          {element}
        </ul>
      ))}
    </li>
  );
}

export default Nav_elements;
