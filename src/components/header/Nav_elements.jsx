function Nav_elements({ classList, classElement, elements }) {
  return (
    <ul className={classList}>
      {elements.map((element) => (
        <li className={classElement} key={element.id}>
          {element.name}
        </li>
      ))}
    </ul>
  );
}

export default Nav_elements;
