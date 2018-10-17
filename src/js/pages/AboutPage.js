import React, { Component } from "react";
import HeroSection from '../components/home/HeroSection';
// import ProjectSection from './ProjectSection';
 
class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2 className="display3">About page</h2>
        <HeroSection data={this.props.data} />
      </div>
    );
  }
}
 
export default AboutPage;