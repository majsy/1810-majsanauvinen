import React, { Component } from "react";
import HeroSection from '../components/home/HeroSection';
import ProjectOverviewSection from '../components/home/ProjectOverviewSection';
 
class HomePage extends Component {
  render() {
    const { data, projects } = this.props;

    return (
      <div>
        <HeroSection data={data.heroSection} />
        <ProjectOverviewSection data={data.projectSection} projects={projects} />
      </div>
    );
  }
}
 
export default HomePage;