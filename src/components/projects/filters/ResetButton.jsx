function ResetButton({ onClickReset }) {
  const handleClickReset = (event) => {
    event.preventDefault();
    onClickReset();
  };
  return (
    <button className="filters__resetButton" onClick={handleClickReset}>
      Mostrar todos
    </button>
  );
}

export default ResetButton;
