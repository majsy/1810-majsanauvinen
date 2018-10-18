import React, { Component } from 'react';
import '../../scss/components/_Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li><a href="#">email</a></li>
          <li><a href="#">instagram</a></li>
          <li><a href="#">linkedin</a></li>
          <li><a href="#">github</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;