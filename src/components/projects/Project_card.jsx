import "@/styles/layout/projects/Project_card.scss";

function Project_card({ projectToRender }) {
  return (
    <li className="project">
      <p>
        <b>Url:</b> {projectToRender.url}
      </p>
      <p>
        <b>Photo:</b> {projectToRender.photo}
      </p>
      <p>
        <b>Fecha:</b> {projectToRender.date}
      </p>
    </li>
  );
}

export default Project_card;
