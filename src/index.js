import React from "react";
import ReactDOM from "react-dom"; // React 17 uses this
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ React 17 way to render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Optional performance reporting
reportWebVitals();
