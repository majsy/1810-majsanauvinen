import React, { Component } from 'react';
import '../../scss/components/_Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>email</li>
          <li>linkedin</li>
          <li>github</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;