import React, { Component } from 'react';
import NavHeader from './NavHeader.jsx';
import $ from 'jquery';

export default class Dashboard extends Component {
  componentWillMount() {
    this.setState({ Height: $(window).height() });
  }
  componentWillUnmount() {
    $(window).unbind('resize', this.adjustResize);
  }

  render() {
    return (
      <div id='wrapper' className='content'>
        <NavHeader />
        <div id='page-wrapper'
          className='page-wrapper'
          ref='pageWrapper'
          style={{ minHeight: this.state.Height }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
