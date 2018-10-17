import React, { Component } from "react";
import HeroSection from '../components/home/HeroSection';
import ProjectSection from '../components/home/ProjectSection';
 
class HomePage extends Component {
  render() {
    console.log(this.props.data)

    return (
      <div>
        <HeroSection data={this.props.data} />
        <ProjectSection />
      </div>
    );
  }
}
 
export default HomePage;