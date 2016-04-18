import React from 'react';

var Base = React.createClass({

  render: function() {
    return (
      <div id='container'>
        {this.props.children}
      </div>
    );
  }

});

export default Base;
