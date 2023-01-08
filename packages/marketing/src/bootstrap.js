import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

// Mount function to start up the APP
const mount = (el) => {
  const root = ReactDOM.createRoot(el);

  root.render(<App />);
};

// if we are in development mode and in isolation,
// then call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
