import React from "react";
import ReactDOM from "react-dom";
import "./globalstyles/index.css";
import "./globalstyles/globalreset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
