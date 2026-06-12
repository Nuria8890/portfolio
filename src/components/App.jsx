import "@/styles/App.scss";
import objetProjects from "@/data/projects";
import Header from "@/components/header/Header";
import AboutMe from "@/components/aboutme/AboutMe";
import Projects from "@/components/projects/Projects";
import Contact from "./contact/Contact";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Project_details from "./projects/Project_details";
import { Routes, Route } from "react-router";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [isModeLight, setIsModeLight] = useState(true);

  const [selectedTech, setSelectedTech] = useState("");

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const toggleMode = () => {
    setIsModeLight(!isModeLight);
    console.log("click en modo claro/oscuro");
  };

  const menuNavElements = [
    {
      id: "aboutMe",
      name: "Sobre mi",
      path: "/",
    },
    {
      id: "projects",
      name: "Proyectos",
      path: "/projects",
    },
    {
      id: "contact",
      name: "Contacta",
      path: "/contact",
    },
  ];

  const changeInputTech = (value) => {
    setSelectedTech(value);
  };

  const clickReset = () => {
    setSelectedTech("");
  };

  const changeContactForm = (event) => {
    const { name, value } = event.target;
    setContactFormData((previous) => ({ ...previous, [name]: value }));
  };

  const submitContactForm = () => {
    setContactFormSubmitted(true);
    setTimeout(() => {
      setContactFormData({ name: "", email: "", subject: "", message: "" });
      setContactFormSubmitted(false);
    }, 9000);
  };

  const arrayProjects = Object.values(objetProjects);

  return (
    <div className={`root ${isModeLight ? "mode__light" : "mode__dark"}`}>
      <Header
        menuNavElements={menuNavElements}
        handleToggleMenu={toggleMenu}
        menuIsOpen={menuIsOpen}
        handleToogleMode={toggleMode}
        isModeLight={isModeLight}
      />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<AboutMe />} />
          </Route>
          <Route path="/projects">
            <Route
              index
              element={
                <Projects
                  arrayProjects={arrayProjects}
                  onChangeInputTech={changeInputTech}
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
          <Route path="/contact">
            <Route
              index
              element={
                <Contact
                  formData={contactFormData}
                  submitContactForm={submitContactForm}
                  submitted={contactFormSubmitted}
                  changeContactForm={changeContactForm}
                />
              }
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
