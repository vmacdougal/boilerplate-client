import React, {Component, PropTypes} from 'react';
import {Input} from 'react-bootstrap';

export default class ImmutableTextInput extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <span>
	<Input type="text" onChange={e => onChange(e.target.value)} value={value}/>
      </span>
    );
  }
}

ImmutableTextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
