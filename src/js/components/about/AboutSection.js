import React, { Component } from 'react';
import '../../../scss/components/about/_AboutSection.scss';

class AboutSection extends Component {
  getExperienceItems() {
    const { data } = this.props;

    return data.experience.list.map((item, index) => (
      <li key={`experience_${index}`}>
        <h4 className="display4 item">{item.role}</h4>
        <h4 className="display4 item"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a></h4>
        <h4 className="display4 item">{item.period}</h4>
      </li>
    ))
  }

  getEducationItems() {
    const { data } = this.props;

    return data.education.list.map((item, index) => (
      <li key={`education_${index}`}>
        <h4 className="display4 item">{item.program}</h4>
        <h4 className="display4 item">{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.school}</a> : item.school }</h4>
        <h4 className="display4 item">{item.period}</h4>
      </li>
    ))
  }

  getCopy() {
    const { data } = this.props;

    return data.copy.map((copy, index) => (
      <li key={`copy_item_${index}`}>
        <p className="display5 copy" dangerouslySetInnerHTML={{__html: copy}}></p>
      </li>
    ))
  }

  render() {
    const { data } = this.props;

    return (
      <div className="AboutSection">

        <h2 className="display2 title">{data.title}</h2>
        <div className="upper-container">

          <div className="left-container">
            <ul className="copy-list">
              { this.getCopy() }
            </ul>

            <div className="list-container">
              <div className="education">
                <h3 className="display3 subtitle">{data.education.title}</h3>
                <ul>
                  { this.getEducationItems()}
                </ul>
              </div>
              <div className="experience">
                <h3 className="display3 subtitle">{data.experience.title}</h3>
                <ul>
                  { this.getExperienceItems()}
                </ul>
              </div>
            </div>

          </div>

          <div className="right-container">
            <div className="img-container"></div>
          </div>

        </div>

      </div>
    );
  }
}

export default AboutSection;