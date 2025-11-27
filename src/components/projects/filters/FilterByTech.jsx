function FilterByTech({ onChangeInpuntTech }) {
  const handleChangeInput = (event) => {
    onChangeInpuntTech(event.target.value);
  };

  return (
    <select id="techFilter" name="techFilter" onChange={handleChangeInput}>
      <option value="all">Todos</option>
      <option value="html">HTML y CSS</option>
      <option value="js">JavaScript vanilla</option>
      <option value="react">React</option>
      <option value="db">Base de datos</option>
    </select>
  );
}

export default FilterByTech;
