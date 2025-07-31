import React from "react";
import ReactDOM from "react-dom/client"; // <-- updated import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ New React 18+ way
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance reporting (optional)
reportWebVitals();
