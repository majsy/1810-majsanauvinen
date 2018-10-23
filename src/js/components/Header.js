import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../scss/components/_Header.scss';
import {withRouter} from 'react-router'
// import ProjectNav from './work/ProjectNav';
import * as classNames from 'classnames';
import  { ROUTE } from '../common/routes';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    const { location, projectList } = this.props;

    return (
      <header className={classNames("Header", {
        isWorkPage: location.pathname === ROUTE.WORK
      })}>
        <ul className="nav">
          <li className="home"><NavLink exact to={ROUTE.HOME}>majsan</NavLink></li>
          {/* <li><NavLink to={ROUTE.WORK}>work</NavLink></li> */}
          <li><NavLink to={ROUTE.ABOUT}>about</NavLink></li>
        </ul>

        {/* { location.pathname === ROUTE.WORK ? <ProjectNav currentProject={project} projectList={projectList} /> : null } */}
      </header>
    );
  }
}

export default withRouter(Header);
