import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <a href="/" className="logo">
          StarBucks
        </a>
        <nav className="navWrap">
          <ul className="navMenu">
            <li className="navList">
              <Link to="/COFFEE">COFFEE</Link>
              <Link to="/MENU">MENU</Link>
              <Link to="/STORE">STORE</Link>
              <Link to="/LOGIN">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
