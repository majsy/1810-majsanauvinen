import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';

export default class ProjectDetailsSection extends Component {
  render() {
    const { project } = this.props

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2">{project.title}</h2>
        <h3 className="display3">{project.subtitle}</h3>
        <p className="copy">{project.description}</p>
      </div>
    );
  }
};        