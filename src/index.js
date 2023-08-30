import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Weather defaultCity="Delhi" />

    <Footer />
  </React.StrictMode>,
  rootElement
);
