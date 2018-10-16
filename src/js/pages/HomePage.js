import React, { Component } from "react";
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
 
class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home page</h2>
        <HeroSection />
        <ProjectSection />
      </div>
    );
  }
}
 
export default HomePage;