import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          {/* <li><NavLink to="/work">Work</NavLink></li> */}
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;
