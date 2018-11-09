import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';
import ProjectContentDisplay from './ProjectContentDisplay';

export default class ProjectDetailsSection extends Component {
  getAdditionalContent() {
    const { project } = this.props;

    return project.additional.map((item, index) => (
      <ProjectContentDisplay img={item.img ? item.img : null} 
      copyArray={item.copyArray ? item.copyArray : null}
      imgArray={item.imgArray ? item.imgArray : null}
      key={`${project.title}_content_${index}`} />
    ));
  }

  getDetailItems() {
    const { project } = this.props;

    return project.main.detailItems.map((item, index) => (
      <li key={`${project.title}_detail_${index}`}>
        <h4 className="display4 item-label" dangerouslySetInnerHTML={{__html: item.label}}></h4>
      </li>
    ))
  }

  getRecognitionItems() {
    const { project } = this.props

    return project.recognition.list.map((item, index) => (
      <li key={`${project.title}_recognition_${index}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h4 className="display4 item">
            <span>{item.source}</span> &mdash; {item.title}
          </h4>
        </a>
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
          <ProjectContentDisplay img={project.main.img} copyArray={project.main.copyArray} />

          <ul className="detail-list">
            { this.getDetailItems() }
          </ul>

          <a className="project-link ui-link" href={project.main.link.url} target="_blank" rel="noopener noreferrer">
            <h4 className="display4 item-label">{project.main.link.label}</h4>
          </a>

          { project.additional ? this.getAdditionalContent() : null }
          
          { project.recognition ? <div className="recognition-container">
            <h3 className="display3 subtitle">{project.recognition.title}</h3>
            <ul className="recognition-list">
              { this.getRecognitionItems() }
            </ul> 
          </div> : null }
        </div>
      </div>
    );
  }
};        