import "@/styles/App.scss";
import objetProjects from "@/data/projects";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Project_details from "./projects/Project_details";
import { Routes, Route } from "react-router";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [isModeLight, setIsModeLight] = useState(true);

  const [selectedTech, setSelectedTech] = useState("");

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const toggleMode = () => {
    setIsModeLight(!isModeLight);
    console.log("click en modo claro/oscuro");
  };

  const changeInpuntTech = (value) => {
    setSelectedTech(value);
  };

  const clickReset = () => {
    setSelectedTech("");
  };

  const arrayProjects = Object.values(objetProjects);

  return (
    <div className={`root ${isModeLight ? "mode__light" : "mode__dark"}`}>
      <Header
        handleToggleMenu={toggleMenu}
        menuIsOpen={menuIsOpen}
        handleToogleMode={toggleMode}
        isModeLight={isModeLight}
      />
      <main>
        <Routes>
          {/* <About_me /> */}
          <Route path="/projects">
            <Route
              index
              element={
                <Projects
                  arrayProjects={arrayProjects}
                  onChangeInpuntTech={changeInpuntTech}
                  selectedTech={selectedTech}
                  onClickReset={clickReset}
                />
              }
            />
            <Route
              path="/projects/:idProject"
              element={<Project_details arrayProjects={arrayProjects} />}
            />
          </Route>
          {/* <Contact /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
