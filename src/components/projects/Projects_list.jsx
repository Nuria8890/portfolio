import Project_card from "./Project_card";

function Projects_list({ objetProjects }) {
  if (!objetProjects) {
    return <div>No hay proyectos</div>;
  }

  const projectsArray = Object.values(objetProjects);

  const projectsElement = projectsArray.map((project, i) => {
    console.log("project en el array es:", project);
    return <Project_card key={i} projectToRender={project} />;
  });
  return (
    <section>
      <ul>{projectsElement}</ul>
    </section>
  );
}

export default Projects_list;
