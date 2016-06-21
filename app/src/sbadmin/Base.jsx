import React, { Component } from 'react';

export default class Base extends Component {
  render() {
    return (
      <div id='container'>
        {this.props.children}
      </div>
    );
  }
}
