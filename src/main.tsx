import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "flowbite";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Router from "./router.tsx";

Aos.init({
  // mirror: false,
  // once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
