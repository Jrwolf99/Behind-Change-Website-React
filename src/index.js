import React from "react";
import ReactDOM from "react-dom";
import "./globalstyles/index.css";
import "./globalstyles/globalreset.css";
import App from "./App";
import { ScreenProvider } from "./context/ScreenContext";

ReactDOM.render(
  <React.StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
