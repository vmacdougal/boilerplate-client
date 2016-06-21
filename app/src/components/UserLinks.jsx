import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Link to="/contact/bob">Contact Bob</Link><br />
        <Link to="/contact/john">Contact John</Link><br />
        <Link to="/contact/mary">Contact Mary</Link>
      </nav>
    );
  }
}
