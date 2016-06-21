import React, { Component } from 'react';
import Links from './Links.jsx';
import Heading from './Heading.jsx';

export default class PageHome extends Component {
  render() {
    return (
      <div>
        <Links />
        <Heading txt="Home" />
      </div>
    );
  }
}
