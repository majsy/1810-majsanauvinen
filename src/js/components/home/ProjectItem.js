import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/components/home/_ProjectItem.scss';

class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    return (
      <NavLink className="ProjectItem" to={`/work/${project.id}`}>
        <h2 className="display2">{project.title}</h2>
        <h3 className="display3">{project.subtitle}</h3>
      </NavLink>
    );
  }
}

export default ProjectItem;