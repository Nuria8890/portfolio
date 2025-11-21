import "@/styles/App.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [isModeLight, setIsModeLight] = useState(true);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const toggleMode = () => {
    setIsModeLight(!isModeLight);
    console.log("click en modo claro/oscuro");
  };

  return (
    <div className={`root ${isModeLight ? "mode__light" : "mode__dark"}`}>
      <Header
        handleToggleMenu={toggleMenu}
        menuIsOpen={menuIsOpen}
        handleToogleMode={toggleMode}
      />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
