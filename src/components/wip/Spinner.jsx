import "@/styles/layout/wip/Spinner.scss";

function Spinner() {
  return (
    <>
      <p className="spinner__text">
        Work <br /> In <br /> Progress
      </p>
      <span className="spinner__loader"></span>
    </>
  );
}

export default Spinner;
