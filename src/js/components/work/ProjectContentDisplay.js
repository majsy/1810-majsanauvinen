import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectContentDisplay.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class ProjectContentDisplay extends Component {
  getImgArray() {
    const { imgArray } = this.props;

    return imgArray.map((item) => {
      const arrayImgContainerStyle = {
        paddingTop: item.aspectRatioPadding + '%' 
      }

      const imgDouble = item.width === '50' ? true : false;
      const imgTrio = item.width === '33' ? true : false;

      return (
        <div className={`${imgDouble ? 'imgDouble': ''} ${imgTrio ? 'imgTrio': ''}`}
        key={`array_item_${item.src}`}>
          <div className={`img-container`} 
          style={arrayImgContainerStyle}>
            <LazyLoadImage
              className="img"
              alt={item.alt}
              height={'100%'}
              wrapperClassName={"placeholder"}
              placeholderSrc={item.placeholder}
              src={item.src}
              width={'100%'} />
          </div>
        </div>
      )   
    })
  }

  render() {
    const { img, copy, imgArray } = this.props;
    const imgContainerStyle = img ? { paddingTop: img.aspectRatioPadding + '%'} : null;

    return (
      <div className={`ProjectContentDisplay`}>
        { img ? <div className="img-container" style={imgContainerStyle}>
          <LazyLoadImage
            className="img"
            alt={img.alt}
            height={'100%'}
            wrapperClassName={"placeholder"}
            placeholderSrc={img.placeholder}
            src={img.src}
            width={'100%'} />
        </div> : null }
        
        { imgArray ? 
          <div className="img-array-container">
            { this.getImgArray() }
        </div> : null }

        { copy ? <p className={`display5 copy`}>{copy}</p> : null }
      </div>
    );
  }
};  