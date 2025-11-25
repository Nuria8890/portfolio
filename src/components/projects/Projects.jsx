import Projects_list from "./Projects_list";

function projects({ objetProjects }) {
  const projectsArray = Object.values(objetProjects);

  console.log("projectsArray es:", projectsArray);

  const HtmlProjects = projectsArray.filter(
    (project) => project.tech === "HTML y CSS"
  );

  const JsProjects = projectsArray.filter(
    (project) => project.tech === "JavaScript"
  );

  const FrameworksProjects = projectsArray.filter(
    (project) =>
      project.tech !== "JavaScript" &&
      project.tech !== "HTML y CSS" &&
      project.tech !== "DB"
  );

  const DbProjects = projectsArray.filter((project) => project.tech === "DB");

  return (
    <section>
      <p>Proyectos de HTM y CSS</p>
      <Projects_list arrayProjects={HtmlProjects} />
      <p>Proyectos con JavaScript vanilla</p>
      <Projects_list arrayProjects={JsProjects} />
      <p>Proyectos con Frameworks</p>
      <Projects_list arrayProjects={FrameworksProjects} />
      <p>Proyectos utilizando DB</p>
      <Projects_list arrayProjects={DbProjects} />
    </section>
  );
}

export default projects;
