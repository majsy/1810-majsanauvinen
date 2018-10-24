import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';

export default class ProjectDetailsSection extends Component {
  getProjectContent() {
    const { project } = this.props;

    return project.content.map((item, index) => (
      <div className={`content ${!item.img ? 'no-image' : ''} 
        ${!item.copy ? 'no-copy' : ''}`} 
        key={`item_${project.title}_${index}`}>
        { item.img ? <div className="img-container">
          <img className="img" src={item.img} />
        </div> : null }

        { item.copy ? <p className={`display5 copy`}>{item.copy}</p> : null }
      </div>
    ));
  }

  render() {
    const { project } = this.props;

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle">{project.subtitle}</h3>
        <div className="content-wrapper">
          { this.getProjectContent() }
        </div>
      </div>
    );
  }
};        