import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';
import ProjectContentDisplay from './ProjectContentDisplay';

export default class ProjectDetailsSection extends Component {
  getAdditionalContent() {
    const { project } = this.props;

    return project.additional.map((item, index) => (
      <ProjectContentDisplay img={item.img ? item.img : null} 
        copy={item.copy ? item.copy : null}
        imgArray={item.imgArray ? item.imgArray : null}
        key={`${project.title}_content_${index}`} />
    ));
  }

  render() {
    const { project } = this.props;
    const mainContent = project.main;

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle" dangerouslySetInnerHTML={{__html: project.subtitle}}></h3>

        <div className="content-wrapper">
          <ProjectContentDisplay 
            img={mainContent.img} 
            copy={mainContent.about.copy} 
            title={mainContent.about.title} 
            role={mainContent.role}
            recognition={mainContent.recognition}
            link={mainContent.link} />

          { project.additional ? this.getAdditionalContent() : null }
        </div>
      </div>
    );
  }
};        