import React, {Component, PropTypes} from 'react';
import {Input} from 'react-bootstrap';

export default class TextInput extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <span>
	<Input type="text" label='Enter Street Address' onChange={e => onChange(e.target.value)} value={value}/>
      </span>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
