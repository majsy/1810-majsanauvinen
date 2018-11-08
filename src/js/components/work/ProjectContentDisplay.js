import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectContentDisplay.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as classNames from "classnames";

export default class ProjectContentDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedImages: []
    }
  }

  getImgArray() {
    const { imgArray } = this.props;

    return imgArray.map((item, idx) => {
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
          { this.renderImage(item, idx + 1) }
          </div>
        </div>
      )
    })
  }

  renderImage(img, idx) {
    return <LazyLoadImage
      className={
        classNames('img', {
        'is-loaded': this.state.loadedImages.includes(idx)
        })}
      alt={img.alt}
      height={'100%'}
      afterLoad={() => this.addOpacity(idx)}
      wrapperClassName={"placeholder"}
      placeholderSrc={img.placeholder}
      src={img.src}
      width={'100%'} />
  }

  addOpacity(idx) {
    if (this.isUnmounted !== true && this.state.loadedImages.includes(idx) === false) {
        this.setState({
          loadedImages: [idx, ...this.state.loadedImages]
        });
    }
  }
  
  componentWillUnmount() {
     this.isUnmounted = true;
  }

  render() {
    const { img, copy, imgArray } = this.props;
    const imgContainerStyle = img ? { paddingTop: img.aspectRatioPadding + '%'} : null;

    return (
      <div className={`ProjectContentDisplay`}>
        { img ? <div className="img-container" style={imgContainerStyle}>
          { this.renderImage(img, 0) }
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