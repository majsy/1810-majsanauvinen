import React, { Component } from "react";
import HeroSection from '../components/home/HeroSection';
import ProjectOverviewSection from '../components/home/ProjectOverviewSection';
import '../../scss/components/_Page.scss';
 
class HomePage extends Component {
  constructor() {
    super();
    this.projectSectionRef = React.createRef();
  }

  handleScrollLabelClick = () => {
    window.scrollTo({
      top: this.projectSectionRef.current.offsetTop, 
      behavior: "smooth"
    })
  }

  render() {
    const { data, projects, hasScrolled } = this.props;

    return (
      <div className="Page">
        <HeroSection data={data.heroSection} 
          handleScrollLabelClick={this.handleScrollLabelClick}
          hasScrolled={hasScrolled} />
        <ProjectOverviewSection data={data.projectSection} 
          projects={projects}
          refProp={this.projectSectionRef} />
      </div>
    );
  }
}
 
export default HomePage;