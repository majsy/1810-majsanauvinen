import React, { Component } from 'react';
import '../../../scss/components/_ProjectSection.scss';
import ProjectItem from './ProjectItem';

class ProjectSection extends Component {
  render() {
    return (
      <div className="ProjectSection">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    );
  }
}

export default ProjectSection;