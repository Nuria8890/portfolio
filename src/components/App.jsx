import "@/styles/App.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
