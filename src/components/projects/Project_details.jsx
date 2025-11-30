import { useParams } from "react-router";
import "@/styles/layout/projects/Project_details.scss";

function Project_details({ arrayProjects }) {
  const { idProject } = useParams();

  const selectedProject = arrayProjects.find((project) => {
    return project.id === parseInt(idProject);
  });

  return (
    <section className="detailsContainer">
      <img
        className="detailsContainer__img"
        src={selectedProject.photo}
        alt={selectedProject.title}
      />
      <div className="detailsContainer__text">
        <h3>{selectedProject.title}</h3>
        <span>
          Proyecto realizado en{" "}
          {selectedProject.date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </span>

        <p dangerouslySetInnerHTML={{ __html: selectedProject.longText }}></p>
      </div>
    </section>
  );
}

export default Project_details;
