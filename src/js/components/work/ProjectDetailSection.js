import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class ProjectDetailsSection extends Component {
  getProjectDetailItems() {
    const { project } = this.props;

    return project.detailItems.map((item, index) => (
      <li className="display5" key={`detail_item_${project.title}_${index}`}>{item}</li>
    ));
  }

  getProjectContent() {
    const { project } = this.props;

    return project.content.map((item, index) => (
      <div className={`content ${!item.img ? 'no-image' : ''} 
        ${!item.copy ? 'no-copy' : ''}`} 
        key={`content_${project.title}_${index}`}>
        { item.img ? <div className="img-container">
          <LazyLoadImage
            className="img"
            alt={''}
            height={'1000px'}
            src={item.img}
            width={'100%'} />
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
        <h3 className="display3 subtitle" dangerouslySetInnerHTML={{__html: project.subtitle}}></h3>

        <ul className="detail-item-list">
          { this.getProjectDetailItems() }
        </ul>

        <div className="content-wrapper">
          { this.getProjectContent() }
        </div>
      </div>
    );
  }
};        