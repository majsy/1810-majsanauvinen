import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/components/home/_ProjectItem.scss';
import  { ROUTE } from '../../common/routes';

class ProjectItem extends Component {
  render() {
    const { project, lastItem } = this.props;

    return (
      <NavLink className={`ProjectItem ${lastItem ? 'lastItem' : ''}`} to={`${ROUTE.WORK}${project.id}`}>
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle">{project.subtitle}</h3>
      </NavLink>
    );
  }
}

export default ProjectItem;