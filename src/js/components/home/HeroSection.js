import React, { Component } from 'react';
import '../../../scss/components/home/_HeroSection.scss';

class HeroSection extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="HeroSection">
        <h1 className="display1">{data.title}</h1>
      </div>
    );
  }
}

export default HeroSection;