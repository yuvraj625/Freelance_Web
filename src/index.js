import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUS from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <AboutUS />
    <Services />
    <Portfolio />
    <ContactUs />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
