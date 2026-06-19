function FilterByTech({ arrayProjects, onChangeInputTech, selectedTech }) {
  const uniqueTechnologies = [
    ...new Set(arrayProjects.map((project) => project.tech)),
  ];
  const technologies = ["Todos", ...uniqueTechnologies];

  const handleClickTech = (technology) => {
    onChangeInputTech(technology === "Todos" ? "" : technology);
  };

  return (
    <div
      className="filters__chips"
      role="group"
      aria-label="Filtrar por tecnología"
    >
      {technologies.map((technology) => {
        const isSelected =
          technology === "Todos"
            ? selectedTech === ""
            : selectedTech === technology;
        return (
          <button
            key={technology}
            type="button"
            className={`filters__chip ${isSelected ? "filters__chip--active" : ""}`}
            onClick={() => handleClickTech(technology)}
            aria-pressed={isSelected}
          >
            {technology}
          </button>
        );
      })}
    </div>
  );
}

export default FilterByTech;
