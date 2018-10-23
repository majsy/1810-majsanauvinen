import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';

export default class ProjectDetailsSection extends Component {
  render() {
    const { project } = this.props

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle">{project.subtitle}</h3>
        <p className="display5 copy">{project.description}</p>
      </div>
    );
  }
};        