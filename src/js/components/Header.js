import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isAboutPage: false
    }
  }

  render() {
    return (
      <header className="Header">
        <ul className="nav">
          <li className="home"><NavLink exact to="/">majsan</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;
