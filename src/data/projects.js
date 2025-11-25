import PhotoA1Gru from "@/assets/a1Gru.jpeg";
import PhotoA1Ev from "@/assets/a1Ev.jpeg";
import PhotoA2Int from "@/assets/a2Int.jpeg";
import PhotoA2Gru from "@/assets/a2Gru.jpeg";
import PhotoA2Ev from "@/assets/a2Ev.jpeg";
import PhotoA3Int from "@/assets/a3Int.jpeg";
import PhotoA3y4Gru from "@/assets/a3y4Gru.jpeg";
import PhotoA3Ev from "@/assets/a3Ev.jpeg";
import PhotoA4Ev from "@/assets/a4Ev.jpeg";

const adalabModulo1Grupal = {
  url: "https://nuria8890.github.io/ADALAB-project-module-1-team-2-TechAnimal/",
  text: "Es una página web realizada con HTML, SCSS y Vite, tiene un diseño responsive mobile first utilizando mediaqueries, por lo que la web se adapta al tamaño de pantalla de distintos dispositivos, y utilizamos control de versiones con Git y GitHub, con el que aprendimos a mejorar la comunicación entre los miembros del equipo.Para el despliegue de este proyecto hemos utilizado GitHub pages.",
  photo: PhotoA1Gru,
  tech: "html",
  date: "dsgdsa",
};

const adalabModulo1Evaluacion = {
  url: "https://nuria8890.github.io/ADALAB-modulo-1-evaluacion-final-Nuria8890/",
  photo: PhotoA1Ev,
  tech: "html",
};

const adalabModulo2Grupal = {
  url: "https://nuria8890.github.io/ADALAB-project-module-2-team-3-HastaElInfinito/",
  photo: PhotoA2Gru,
  tech: "js",
};

const adalabModulo2EvaluacionIntermedia = {
  url: "https://nuria8890.github.io/ADALAB-modulo-2-evaluacion-intermedia-Nuria8890/",
  photo: PhotoA2Int,
  tech: "js",
};

const adalabModulo2Evaluacion = {
  url: "https://nuria8890.github.io/ADALAB-modulo-2-evaluacion-final-Nuria8890/",
  photo: PhotoA2Ev,
  tech: "js",
};

const adalabModulo3EvaluacionIntermedia = {
  url: "https://nuria8890.github.io/ADALAB-modulo-3-evaluacion-intermedia-Nuria8890/",
  photo: PhotoA3Int,
  tech: "react",
};

const adalabModulo3Evaluacion = {
  url: "https://nuria8890.github.io/ADALAB-modulo-3-evaluacion-final-Nuria8890/",
  photo: PhotoA3Ev,
  tech: "react",
};

const adalabModulo3y4Grupal = {
  url: "https://promo-a-module-4-team-2-proyectos.onrender.com/",
  photo: PhotoA3y4Gru,
  tech: "db",
};

const adalabModulo4Evaluacion = {
  url: "https://nuria8890.github.io/ADALAB-modulo-4-evaluacion-final-bpw-Nuria8890/",
  photo: PhotoA4Ev,
  tech: "db",
};

/* TODO: 
  - sacar los proyectitos de 42Madrid y de Platzi de cada carpeta para poder crear una url de cada uno
  - terminar los pair programming de aladab y crear las url de cada uno
*/

const objetProjects = {
  a1Gru: adalabModulo1Grupal,
  a1Ev: adalabModulo1Evaluacion,
  a2Gru: adalabModulo2Grupal,
  a2Int: adalabModulo2EvaluacionIntermedia,
  a2Ev: adalabModulo2Evaluacion,
  a3Int: adalabModulo3EvaluacionIntermedia,
  a3Ev: adalabModulo3Evaluacion,
  a3y4Gru: adalabModulo3y4Grupal,
  a4Ev: adalabModulo4Evaluacion,
};

export default objetProjects;
