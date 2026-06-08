function FilterByTech({ onChangeInputTech, technologies, selectedTech }) {
  const handleChangeInput = (event) => {
    onChangeInputTech(event.target.value);
  };

  const technology = technologies.map((technology, i) => {
    return (
      <option key={i} value={technology}>
        {technology}
      </option>
    );
  });

  return (
    <select
      className="filters__filterByTech"
      id="techFilter"
      name="techFilter"
      value={selectedTech}
      onChange={handleChangeInput}
    >
      <option value="">Todos los proyectos</option>
      {technology}
    </select>
  );
}

export default FilterByTech;
