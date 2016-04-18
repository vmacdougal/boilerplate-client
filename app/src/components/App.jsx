import React, { Component } from 'react';
import Heading from './Heading.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Heading txt='Hello World!' />
      </div>
    );
  }
}
