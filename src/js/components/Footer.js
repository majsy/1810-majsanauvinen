import React, { Component } from 'react';
import '../../scss/components/_Footer.scss';
import {withRouter} from 'react-router'

class Footer extends Component {
  NavListItem() {
    const { data } = this.props;

    return data.nav.map((item, index) => (
      <li className="display4" key={`nav_item_${index}`}>
      { item.label === 'email' ?
        <a className="ui-link" href={item.url}>{item.label}</a>
        :<a className="ui-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a> 
      } 
      </li>
    ));
  }

  render() {
    const { data } = this.props;

    return (
      <footer className="Footer">
        <ul>
          { this.NavListItem() }
        </ul>
        <h5 className="display4 copyright">{data.copyright}</h5>
      </footer>
    );
  }
}

export default withRouter(Footer);