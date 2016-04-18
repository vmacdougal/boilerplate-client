import React from 'react';
import NavHeader from 'layouts/NavHeader';
import $ from 'jquery';

var HomePage = React.createClass({
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },
  componentDidMount: function() {},
  componentWillUnmount: function(){
    $(window).unbind('resize', this.adjustResize);
  },
  getInitialState: function(){
    return {
    };
  },
  render: function() {
    return (
      <div id='wrapper' className='content'>
        <NavHeader />
        <div id='page-wrapper' className='page-wrapper' ref='pageWrapper' style={{minHeight: this.state.Height}}>
          {this.props.children}
        </div>
      </div>
    );
  },
  statics: {
    fetchData: function(params) {
      params;
    }
  }
});

export default HomePage;
