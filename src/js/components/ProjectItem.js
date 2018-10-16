import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/components/_ProjectItem.scss';

class ProjectItem extends Component {
  render() {
    return (
      <NavLink className="ProjectItem" to="/work">
        <h2 className="display2">Stonewall Forever</h2>
        <h3 className="display3">The LGBT Community Center + Google.org</h3>
      </NavLink>
    );
  }
}

export default ProjectItem;