import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/App.scss";
import App from "@/components/App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
