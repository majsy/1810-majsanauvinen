import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';
import {withRouter} from 'react-router'
import  { ROUTE } from '../common/routes';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="nav">
          <li className="home"><NavLink exact to={ROUTE.HOME}>majsan</NavLink></li>
          <li><NavLink to={ROUTE.ABOUT}>about</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default withRouter(Header);
