import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Portada from "./Portada";
import reportWebVitals from "./reportWebVitals";
import "./stylos/Movile.css";

ReactDOM.render(
  <React.StrictMode>
    <Portada />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
