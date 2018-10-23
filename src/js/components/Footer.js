import React, { Component } from 'react';
import '../../scss/components/_Footer.scss';
import {withRouter} from 'react-router'
import * as classNames from 'classnames';

class Footer extends Component {
  NavListItem() {
    const { data } = this.props;

    return data.nav.map((item, index) => (
      <li className="display5" key={`nav_item_${index}`}>
        <a href={item.url} target="_blank">{item.label}</a>
      </li>
    ));
  }

  render() {
    const { location, data } = this.props;

    return (
      <footer className={classNames("Footer", {
        isAboutPage: location.pathname === '/about'
      })}>
        <ul>
          { this.NavListItem() }
        </ul>
        <h5 className="display5 copyright">{data.copyright}</h5>
      </footer>
    );
  }
}

export default withRouter(Footer);