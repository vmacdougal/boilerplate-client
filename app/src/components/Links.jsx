import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/bootstrap">Bootstrap</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link><br />
      </nav>
    );
  }
}
