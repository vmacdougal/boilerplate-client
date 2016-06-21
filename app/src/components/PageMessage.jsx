import React, { Component } from 'react';
import Links from './Links.jsx';
import Heading from './Heading.jsx';

export default class PageMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Heading txt={this.props.params.user} />
      </div>
    );
  }
}
