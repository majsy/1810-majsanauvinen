import React, { Component } from "react";
import AboutSection from '../components/about/AboutSection';
import '../../scss/components/_Page.scss';
 
class AboutPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="Page">
        <AboutSection data={data} />
      </div>
    );
  }
}
 
export default AboutPage;