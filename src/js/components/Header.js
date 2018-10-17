import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="nav">
          <li><NavLink exact to="/">majsan</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;
