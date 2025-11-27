function FilterByTech({ onChangeInpuntTech, technologies }) {
  const handleChangeInput = (event) => {
    onChangeInpuntTech(event.target.value);
  };

  const technologySelected = technologies.map((technology, i) => {
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
      onChange={handleChangeInput}
    >
      <option value="all">Todos</option>
      {technologySelected}
    </select>
  );
}

export default FilterByTech;
