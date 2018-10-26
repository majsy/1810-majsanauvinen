import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailSection.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class ProjectDetailsSection extends Component {
  getAdditionalContent() {
    const { project } = this.props;

    return project.additionalContent.map((item, index) => {
      const imgContainerStyles = {
        paddingTop: item.img.aspectRatioPadding + '%'
      }

      return (
        <div className={`content ${!item.img ? 'no-image' : ''} 
          ${!item.copy ? 'no-copy' : ''}`} key={`content_${project.title}_${index}`}>

          { item.img ? 
          <div className="img-container" style={imgContainerStyles}>
            <LazyLoadImage
              className="img"
              alt={item.img.alt}
              height={'100%'}
              placeHolder={item.img.placeholder}
              src={item.img.src}
              width={'100%'} />
          </div> : null }

        { item.copy ? <p className={`display5 copy`}>{item.copy}</p> : null }

      </div>
      )
    });
  }

  render() {
    const { project } = this.props;
    const { mainContent } = project.mainContent;

    const imgContainerStyle = {
      paddingTop: project.mainContent.img.aspectRatioPadding + '%'
    }

    return (
      <div className="ProjectDetailSection">
        <h2 className="display2 title" dangerouslySetInnerHTML={{__html: project.title}}></h2>
        <h3 className="display3 subtitle" dangerouslySetInnerHTML={{__html: project.subtitle}}></h3>

        <div className="content-wrapper">
          <div className={`content`}>
            <div className="img-container" style={imgContainerStyle}>
              <LazyLoadImage
                className="img"
                alt={project.mainContent.img.alt}
                height={'100%'}
                placeHolder={project.mainContent.img.placeholder}
                src={project.mainContent.img.src}
                width={'100%'} />
            </div>

          <p className={`display5 copy`}>{project.mainContent.copy}</p>
          <h5 className="display5">{project.mainContent.detailItems.role}</h5>
          { project.mainContent.detailItems.agency ? <h5 className="display5">{project.mainContent.detailItems.agency}</h5> : null }
        </div>

          { this.getAdditionalContent() }
        </div>
      </div>
    );
  }
};        