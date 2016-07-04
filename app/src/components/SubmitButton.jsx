import React, {Component, PropTypes} from 'react';
import {Panel, Input, Button} from 'react-bootstrap';

export default class SubmitButton extends Component {
  render() {
    const {onClick} = this.props;
    return (
      <span>
        <Button type='submit' bsSize='large' bsStyle='success' block  onClick={e => onClick(e.target.value)}>Map Location</Button>
      </span>
    );
  }
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
