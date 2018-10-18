import React, { Component } from 'react';
import '../../../scss/components/about/_AboutSection.scss';
import img from '../../../images/majsan.jpg';

class AboutSection extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="AboutSection">
        <div className="left-container">
          <h2 className="display1">{data.title}</h2>
          <p className="copy">{data.copy}</p>
          
        </div>
        <div className="right-container">
          <div className="img-container"></div>
          {/* <img className="img" src={img} alt="Majsan" /> */}
        </div>
      </div>
    );
  }
}

export default AboutSection;