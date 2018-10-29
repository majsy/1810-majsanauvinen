import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectContentDisplay.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class ProjectContentDisplay extends Component {
  render() {
    const { img, copy } = this.props;

    const imgContainerStyle = {
      paddingTop: img.aspectRatioPadding + '%'
    }

    return (
      <div className={`ProjectContentDisplay`}>
        { img ? <div className="img-container" style={imgContainerStyle}>
          <LazyLoadImage
            className="img"
            alt={img.alt}
            height={'100%'}
            placeHolder={img.placeholder}
            src={img.src}
            width={'100%'} />
        </div> : null }
        { copy ? <p className={`display5 copy`}>{copy}</p> : null }
      </div>
    );
  }
};  