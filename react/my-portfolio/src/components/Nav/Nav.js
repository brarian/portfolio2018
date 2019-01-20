import React, { Component } from "react";
import { Route, NavLink,  Router } from "react-router-dom";

import createHashHistory from 'history/createHashHistory'; 
import About from "../About/About";
import MyWork from "../MyWork/MyWork";
import Contact from "../Contact/Contact";
import "./Nav.css";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL }); 

class Nav extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div className={Nav.css}>
          <header>
            <ul>
              <li className="logo">Brarian</li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">My Work</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </header>
          <main className="content" />
          <Route exact path="/" component={About} />
          <Route path="/work" component={MyWork} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }

}

export default Nav;
