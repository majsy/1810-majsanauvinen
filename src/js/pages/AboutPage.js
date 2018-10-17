import React, { Component } from "react";
import HeroSection from '../components/home/HeroSection';
 
class AboutPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <HeroSection data={data} />
      </div>
    );
  }
}
 
export default AboutPage;