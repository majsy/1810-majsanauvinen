import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';
import {withRouter} from 'react-router'
import * as classNames from 'classnames';
import  { ROUTE } from '../common/routes';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    const { location } = this.props;

    return (
      <header className={classNames("Header", {
        isAboutPage: location.pathname === ROUTE.ABOUT
      })}>
        <ul className="nav">
          <li className="home"><NavLink exact to={ROUTE.HOME}>majsan</NavLink></li>
          <li><NavLink to={ROUTE.ABOUT}>about</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default withRouter(Header);
