import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends Component {
  constructor(props){
   super(props);
   this.state = {
     menu: false
   };
   this.toggleMenu = this.toggleMenu.bind(this);
  }
   toggleMenu = () => {
     this.setState({ visible: !this.state.visible})
   }
  

  render() {
    return (
      <div className="menu">
      <button onClick={this.toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          color="white"
        />
        </button>
        <div className={ this.state.toggleMenu ? "displayBlock" : "displayNone"} ref={menu => this.menu = menu}>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/work">My Work</NavLink>
          </li>

          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
      </div>
    );
  }
}

export default Menu