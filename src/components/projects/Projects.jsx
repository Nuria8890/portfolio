import Projects_list from "./Projects_list";

function projects({ objetProjects }) {
  return (
    <section>
      <p>Proyectos de HTM y CSS</p>
      <Projects_list objetProjects={objetProjects} />
      <p>Proyectos con JavaScript vanilla</p>
      <Projects_list objetProjects={objetProjects} />
      <p>Proyectos con Frameworks</p>
      <Projects_list objetProjects={objetProjects} />
      <p>Proyectos utilizando DB</p>
      <Projects_list objetProjects={objetProjects} />
    </section>
  );
}

export default projects;
