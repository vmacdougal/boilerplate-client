import React, { Component } from 'react';
import Heading from './Heading.jsx';

class StateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update(this)} />
        <Heading txt={this.state.txt} cat={1} />
      </div>
    );
  }
}

export default StateUpdate;
