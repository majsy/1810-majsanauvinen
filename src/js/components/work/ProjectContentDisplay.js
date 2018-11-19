import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectContentDisplay.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProjectDetailDisplay from './ProjectDetailDisplay';
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

    return imgArray.map((item, index) => {
      const arrayImgContainerStyle = {
        paddingTop: item.aspectRatioPadding + '%' 
      }

      const imgDouble = item.width === '50' ? true : false;
      const imgTrio = item.width === '33' ? true : false;

      return (
        <li className={`${imgDouble ? 'imgDouble': ''} ${imgTrio ? 'imgTrio': ''}`}
        key={`array_item_${item.src}`}>
          <div className={`img-container`} 
          style={arrayImgContainerStyle}>
            { this.renderImage(item, index + 1) }
          </div>
        </li>
      )
    })
  }

  getCopy() {
    const { copy } = this.props;

    return copy.map((item, index) => (
      <li className={``} key={`copy_item_${index}`}>
        <p className={`display5 copy`} dangerouslySetInnerHTML={{__html: item}}></p>
      </li>
    ));
  }

  renderImage(img, index) {
    return <LazyLoadImage
      className={
        classNames('img', {
        'is-loaded': this.state.loadedImages.includes(index)
        })}
      alt={img.alt}
      height={'100%'}
      afterLoad={() => this.addOpacity(index)}
      wrapperClassName={"placeholder"}
      placeholderSrc={img.placeholder}
      src={img.src}
      width={'100%'} />
  }

  addOpacity(index) {
    if (this.isUnmounted !== true && this.state.loadedImages.includes(index) === false) {
        this.setState({
          loadedImages: [index, ...this.state.loadedImages]
        });
    }
  }
  
  componentWillUnmount() {
     this.isUnmounted = true;
  }

  render() {
    const { img, imgArray, copy, aboutTitle, link, role, recognition } = this.props;
    const imgContainerStyle = img ? { paddingTop: img.aspectRatioPadding + '%'} : null;

    return (
      <div className={`ProjectContentDisplay`}>
        { img ? <div className="img-container" style={imgContainerStyle}>
          { this.renderImage(img, 0) }
        </div> : null }
        
        { imgArray ? 
          <ul className="img-list">
            { this.getImgArray() }
        </ul> : null }

        <div className="copy-container">
          { copy ? <ul className="copy-list">
            { aboutTitle ? <h3 className="display3 subtitle">{aboutTitle}</h3> : null }
            { this.getCopy() } 
          </ul> : null }

          { role ? <ProjectDetailDisplay role={role} 
            recognition={recognition} 
            link={link} /> : null }
        </div>
      </div>
    );
  }
};  