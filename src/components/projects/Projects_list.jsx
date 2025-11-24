function Projects_list({ projects }) {
  const projectsElement = projects.map((project) => {
    return <projectCard key={project.id} project={project} />;
  });
  return (
    <section>
      <ul>{projectsElement}</ul>
    </section>
  );
}

export default Projects_list;
