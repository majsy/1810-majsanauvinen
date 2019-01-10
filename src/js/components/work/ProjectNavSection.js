import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../../scss/components/work/_ProjectNavSection.scss';
import  { ROUTE } from '../../common/routes';

class ProjectNavSection extends Component {
  render() { 
    const { currentProject, projectList } = this.props;
    const index = projectList.indexOf(currentProject);
    const next = this.props.projectList[index + 1];
    const previous = this.props.projectList[index - 1];

    return (
      <div className="ProjectNavSection">
        <nav className="ProjectNav">
          <ul className="nav-list">
            { next !== undefined && 
              <li>
                <h3 className="display3 eyebrow">Next Project</h3>
                <NavLink to={`${ROUTE.WORK}${next.id}`}>
                  <h2 className="display2 title" dangerouslySetInnerHTML={{__html: next.title}}></h2>
                  <h3 className="display3 subtitle">{next.subtitle}</h3>
                </NavLink>
              </li> }
            { previous !== undefined && 
              <li>
                <NavLink to={`${ROUTE.WORK}${previous.id}`}>
                  <h3 className="display3 previous">Previous Project</h3>
                </NavLink>
              </li> }
          </ul>
        </nav>
      </div>
    );
  }
}

export default ProjectNavSection;