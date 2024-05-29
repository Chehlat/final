import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProfessorContextProvider } from "./context/ProfessorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProfessorContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProfessorContextProvider>
);
