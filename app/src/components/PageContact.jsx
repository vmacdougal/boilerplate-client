import React, { Component } from 'react';
import Links from './Links.jsx';
import Heading from './Heading.jsx';
import UserLinks from './UserLinks.jsx';

export default class PageContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Links />
        <Heading txt="Contact" />
        <UserLinks />
        {this.props.children}
      </div>
    );
  }
}
