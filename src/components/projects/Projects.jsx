import "@/styles/layout/projects/Projects.scss";
import Projects_list from "./Projects_list";

function projects({ objetProjects }) {
  return (
    <section className="project">
      <Projects_list objetProjects={objetProjects} />
    </section>
  );
}

export default projects;
