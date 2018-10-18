import React, { Component } from "react";
import AboutSection from '../components/about/AboutSection';
 
class AboutPage extends Component {
  render() {
    const { data, routerProps } = this.props;

    console.log(routerProps)

    return (
      <div>
        <AboutSection data={data} />
      </div>
    );
  }
}
 
export default AboutPage;