import React, { Component } from 'react';
import '../../../scss/components/home/_HeroSection.scss';

class HeroSection extends Component {
  onScrollLabelClick = () => { 
    this.props.handleScrollLabelClick();
  }

  render() {
    const { data, hasScrolled } = this.props;

    return (
      <div className={`HeroSection ${hasScrolled ? 'hasScrolled': ''}`}>
        <h1 className="display1 title">{data.title}</h1>
        <div className="button-container">
          <button className="button-scroll" onClick={this.onScrollLabelClick}>
            <span className="display5 label">{data.scrollLabel}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default HeroSection;