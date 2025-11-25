import "@/styles/layout/projects/Project_card.scss";

function Project_card({ projectToRender }) {
  console.log("projectToRender es:", projectToRender);
  return (
    <a href={projectToRender.url} target="_blank" rel="noopener noreferrer">
      <li className="project">
        <img
          className="project__img"
          src={projectToRender.photo}
          alt="imagen"
        />
        <p></p>
        <p>
          <b>Fecha:</b> {projectToRender.date}
        </p>
      </li>
    </a>
  );
}

export default Project_card;
