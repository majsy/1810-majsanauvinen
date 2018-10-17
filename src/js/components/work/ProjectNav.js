import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../../scss/components/work/_ProjectNav.scss';

class ProjectNav extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  // getNextProject() {
  //   const { i, projectList } = this.props;
  //   const nextIndex = projectList[i+1] <= projectList.length ? true : false;

  //   const nextProject = nextIndex.id

  //   if (nextProject) {
  //     return (
  //       <li><NavLink to={`/work/${nextProject}`}>next</NavLink></li>
  //     )
  //   }
  // }

  render() { 
    return (
      <nav className="ProjectNav">
        <ul className="nav-list">
          {/* { this.getNextProject() } */}
          <li><NavLink to="/about">prev</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default ProjectNav;