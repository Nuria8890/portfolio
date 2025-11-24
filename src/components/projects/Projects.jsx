import Projects_list from "./Projects_list";

function projects({ objetProjects }) {
  return (
    <section>
      <Projects_list objetProjects={objetProjects} />
    </section>
  );
}

export default projects;
