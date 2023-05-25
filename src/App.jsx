import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </Router>
  );
};
export default App;
