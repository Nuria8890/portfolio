import { useParams } from "react-router";

function Project_details({ arrayProjects }) {
  const { idProject } = useParams();

  const selectedProject = arrayProjects.find((project) => {
    return project.id === parseInt(idProject);
  });

  return (
    <section>
      <div>
        <img src={selectedProject.photo} alt={selectedProject.title} />
        <div>
          <h3>{selectedProject.title}</h3>
          <span>
            {selectedProject.date.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
            })}
          </span>
          <p>{selectedProject.text}</p>
        </div>
      </div>
    </section>
  );
}

export default Project_details;
