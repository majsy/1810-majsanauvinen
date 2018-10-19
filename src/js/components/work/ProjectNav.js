import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../../scss/components/work/_ProjectNav.scss';
import  { ROUTE } from '../../common/routes';

class ProjectNav extends Component {
  render() { 
    const { currentProject, projectList } = this.props;
    const index = projectList.indexOf(currentProject);
    const next = this.props.projectList[index + 1];
    const previous = this.props.projectList[index - 1];

    return (
      <nav className="ProjectNav">
        <ul className="nav-list">
          { next !== undefined && <li><NavLink to={`${ROUTE.WORK}${next.id}`}>next</NavLink></li> }
          { previous !== undefined && <li><NavLink to={`${ROUTE.WORK}${previous.id}`}>previous</NavLink></li> }
        </ul>
      </nav>
    );
  }
}

export default ProjectNav;