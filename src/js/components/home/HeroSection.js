import React, { Component } from 'react';
import '../../../scss/components/_HeroSection.scss';

class HeroSection extends Component {
  render() {

    // console.log(this.props.data)

    return (
      <div className="HeroSection">
        {/* <h1 className="display1">I'm Majsan, a Swedish developer and creative mind based in New York.</h1> */}
        <h1 className="display1">{this.props.data.title}</h1>
      </div>
    );
  }
}

export default HeroSection;