import React, { Component } from 'react';
import '../../../scss/components/about/_AboutSection.scss';
import img from '../../../images/majsan.jpg';

class AboutSection extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="AboutSection">
        <div className="left-container">
          {/* <h2 className="display1 title">{data.title}</h2> */}
          <p className="display5 copy" dangerouslySetInnerHTML={{__html: data.copy.p1}}></p>
          <p className="display5 copy" dangerouslySetInnerHTML={{__html: data.copy.p2}}></p>
          <p className="display5 copy" dangerouslySetInnerHTML={{__html: data.copy.p3}}></p>
          
        </div>
        <div className="right-container">
          <div className="img-container"></div>
        </div>
      </div>
    );
  }
}

export default AboutSection;