import React, { Component } from 'react';
import '../../../scss/components/home/_ProjectOverviewSection.scss';
import ProjectItem from './ProjectItem';

export default class ProjectOverviewSection extends Component {
  ProjectListItem() {
    const { projects } = this.props;

    return projects.map((item, index) => (
      <li key={`project_${index}`}>
        <ProjectItem project={item} />
      </li>
    ));
  }

  render() {
    return (
      <div className="ProjectOverviewSection">
        <ul>
          { this.ProjectListItem() }
        </ul>
      </div>
    );
  }
};