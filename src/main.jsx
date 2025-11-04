import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/App.scss";
import App from "@/components/App.jsx";
// TODO: importar HashRouter para crear rutas

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
