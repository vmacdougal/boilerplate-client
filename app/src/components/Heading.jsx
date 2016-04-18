import React from 'react';

const Heading = function heading(props) {
  return (
    <h1>{props.txt}</h1>
  );
};

Heading.propTypes = {
  txt: React.PropTypes.string,
};

Heading.defaultProps = {
  txt: 'Hello World!',
};

export default Heading;
