import React, { Component } from 'react';

export default class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.txt}</h1>
    );
  }
}
