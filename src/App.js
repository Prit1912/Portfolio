import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import $ from 'jquery';
// import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Project from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/skills" component = {About}/>
        <Route exact path = "/project" component = {Project}/>
        <Route exact  path = "/contact" component = {Contact}/>
        <Redirect to = "/"/>
      </Switch>
    </div>
  );
}
