import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import $ from 'jquery';
import NavMessages from './NavMessages.jsx';
import NavTasks from './NavTasks.jsx';
import NavAlerts from './NavAlerts.jsx';
import NavProfile from './NavProfile.jsx';
import NavSidebar from './NavSidebar.jsx';

export default class NavHeader extends Component {
  toggleMenu() {
    if ($('.navbar-collapse').hasClass('collapse')) {
      $('.navbar-collapse').removeClass('collapse');
    } else {
      $('.navbar-collapse').addClass('collapse');
    }
  }

  render() {
    return (
      <Navbar fluid={true} style={{ margin: 0 }}>
        <NavbarBrand>
          <img src={ require('./img/logo.png') }
            alt='Start React'
            title='Start React' />
          <span>&nbsp;SB Admin React - </span>
          <Link to='/home' title='boilerplate' rel='home' >Boilerplate</Link>
          <button type='button'
            className='navbar-toggle'
            onClick={this.toggleMenu}
            style={{ position: 'absolute', right: 0, top: 0 }}>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </NavbarBrand>

        {/*
          <ul className='nav navbar-top-links navbar-right'>
          <Nav style={ {margin: 0} }>
            <NavMessages />
            <NavTasks />
            <NavAlerts />
            <NavProfile />
          </Nav>
        </ul>
        */}

        <NavSidebar />
      </Navbar>

    );
  }
}
