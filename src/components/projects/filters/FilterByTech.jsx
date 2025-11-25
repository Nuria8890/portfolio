function FilterByTech({ onChangeInpuntTech }) {
  const handleChangeInput = (event) => {
    onChangeInpuntTech(event.target.value);
  };

  return (
    <select onChange={handleChangeInput}>
      <option value="all">Selecciona una tecnología</option>
      <option value="html">HTML y CSS</option>
      <option value="js">JavaScript vanilla</option>
      <option value="react">React</option>
      <option value="db">Base de datos</option>
    </select>
  );
}

export default FilterByTech;
