import "@/styles/layout/common/ScrollToTop.scss";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scrollToTop"
      onClick={handleScrollToTop}
      aria-label="Volver al inicio de la página"
      title="Volver al inicio"
      type="button"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
