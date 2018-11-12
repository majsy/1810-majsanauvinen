import React, { Component } from 'react';
import '../../../scss/components/home/_ProjectOverviewSection.scss';
import ProjectItem from './ProjectItem';

export default class ProjectOverviewSection extends Component {
  ProjectListItem() {
    const { projects } = this.props;
    const lastIndex = projects.length - 1;

    return projects.map((item, index) => (
      <li key={`project_${index}`}>
        <ProjectItem project={item} lastItem={index === lastIndex ? true : false} />
      </li>
    ));
  }

  render() {
    return (
      <div className="ProjectOverviewSection" ref={this.props.refProp}>
        <ul>
          { this.ProjectListItem() }
        </ul>
      </div>
    );
  }
};