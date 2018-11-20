import React, { Component } from 'react';
import '../../../scss/components/work/_ProjectDetailDisplay.scss';

export default class ProjectDetailDisplay extends Component {
  getRecognitionItems() {
    const { recognition } = this.props

    return recognition.list.map((item, index) => (
      <li key={`${item.title}_${index}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h4 className="display4 item">
            <span>{item.source}</span> &mdash; {item.title}
          </h4>
        </a>
      </li>
    ))
  }

  getRoleItems() {
    const { role } = this.props;

    return role.items.map((item, index) => (
      <li key={`${role}_${index}`}>
        <h4 className="display4 item-label" dangerouslySetInnerHTML={{__html: item.label}}></h4>
      </li>
    ))
  }

  render() {
    const { link, role, recognition } = this.props;

    return (
      <div className={`ProjectDetailDisplay`}>

        <div className="role-container">
          <h3 className="display3 subtitle">{role.title}</h3>
          <ul className="role-list">
            { this.getRoleItems() }
          </ul>
        </div>
          

        { recognition ? <div className="recognition-container">
          <h3 className="display3 subtitle">{recognition.title}</h3>
          <ul className="recognition-list">
            { this.getRecognitionItems() }
          </ul> 
        </div> : null }

        <a className="project-link ui-link" href={link.url} target="_blank" rel="noopener noreferrer">
          <h4 className="display4 item-label">{link.label}</h4>
        </a>
      </div>
    );
  }
}; 