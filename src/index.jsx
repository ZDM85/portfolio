import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (!root) {
  throw new Error("Root not found!");
}
root.render(<App />);
