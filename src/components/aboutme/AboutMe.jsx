import React from "react";
import aboutmeFondo from "@/assets/aboutme_fondo.png";
import "@/styles/layout/aboutme/AboutMe.scss";

function AboutMe() {
  return (
    <div
      className="aboutMe"
      style={{ backgroundImage: `url(${aboutmeFondo})` }}
    >
      <p>About Me...</p>
    </div>
  );
}

export default AboutMe;
