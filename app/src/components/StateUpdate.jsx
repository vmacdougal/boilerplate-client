import React, {Component} from 'react';
import Heading from 'Heading.jsx';

class StateUpdate extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'Message Preview',
      cat: 0,
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.update.bind(this)} />
        <Heading txt={this.state.txt} cat={1} />
      </div>
    );
  }
}

export default StateUpdate;
