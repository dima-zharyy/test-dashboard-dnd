import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-grid-layout/css/styles.css";
import { App } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
