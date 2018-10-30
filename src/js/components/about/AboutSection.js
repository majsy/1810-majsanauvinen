import React, { Component } from 'react';
import '../../../scss/components/about/_AboutSection.scss';

class AboutSection extends Component {
  getExperienceItems() {
    const { data } = this.props;

    return data.experience.list.map((item, index) => (
      <li key={`experience_${index}`}>
        <h4 className="display4 item">{item.role}, {item.company}, {item.period}</h4>
      </li>
    ))
  }

  getEducationItems() {
    const { data } = this.props;

    return data.education.list.map((item, index) => (
      <li key={`education_${index}`}>
        <h4 className="display4 item">{item.program}, {item.school}, {item.period}</h4>
      </li>
    ))
  }

  render() {
    const { data } = this.props;

    return (
      <div className="AboutSection">
        <div className="upper-container">
          <div className="left-container">
            <p className="display5 copy" dangerouslySetInnerHTML={{__html: data.copy.p1}}></p>
            <p className="display5 copy" dangerouslySetInnerHTML={{__html: data.copy.p2}}></p>
            
          </div>
          <div className="right-container">
            <div className="img-container"></div>
          </div>
        </div>

        <div className="lower-container">
          <div className="experience-container">
            <h3 className="display3 title">{data.experience.title}</h3>
            <ul>
              { this.getExperienceItems()}
            </ul>
          </div>
          <div className="education-container">
            <h3 className="display3 title">{data.education.title}</h3>
            <ul>
              { this.getEducationItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;