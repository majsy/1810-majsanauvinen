import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';
import {withRouter} from 'react-router'
import  { ROUTE } from '../common/routes';

class Header extends Component {
  render() {
    const { introTextHasLoaded } = this.props;
    
    return (
      <header className={`Header ${introTextHasLoaded ? 'introTextHasLoaded' : ''}`}>
        <ul className="nav">
          <li className="home"><NavLink activeClassName={'active'} exact to={ROUTE.HOME}>majsan</NavLink></li>
          <li><NavLink activeClassName={'active'} to={ROUTE.ABOUT}>about</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default withRouter(Header);
