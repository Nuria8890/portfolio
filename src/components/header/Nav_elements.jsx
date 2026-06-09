import { Link } from "react-router";

function Nav_elements({ classList, classElement, elements }) {
  return (
    <ul className={classList}>
      {elements.map((element) => (
        <li className={classElement} key={element.id}>
          <Link to={element.path}>{element.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav_elements;
