import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';
import ProjectContentDisplay from './ProjectContentDisplay';

export default class ProjectDetailsSection extends Component {
  getAdditionalContent() {
    const { project } = this.props;

    return project.additional.map((item, index) => (
      <ProjectContentDisplay img={item.img ? item.img : null} 
        copy={item.copy ? item.copy : null} 
        key={`${project.title}_content_${index}`} />
    ));
  }

  getDetailItems() {
    const { project } = this.props;

    return project.main.detailItems.map((item, index) => (
      <li key={`${project.title}_detail_${index}`}>
        <h5 className="display3 label">{item.title}: {item.label}</h5>
      </li>
    ))
  }

  render() {
    const { project } = this.props;

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle" dangerouslySetInnerHTML={{__html: project.subtitle}}></h3>

        <div className="content-wrapper">
          <ProjectContentDisplay img={project.main.img} copy={project.main.copy} />
          <ul className="detail-list">
            { this.getDetailItems() }
          </ul>

          { project.additional ? this.getAdditionalContent() : null }
        </div>
      </div>
    );
  }
};        