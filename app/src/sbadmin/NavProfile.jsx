import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavProfile extends Component {
  render() {
    return (
      <NavDropdown title=<i className='fa fa-user fa-fw' /> id='profileNav'>
        <MenuItem eventKey='1'>
          <i className='fa fa-user fa-fw' />
          User Profile
        </MenuItem>
        <MenuItem eventKey='2'>
          <i className='fa fa-gear fa-fw' />
          Settings
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='3' linkTo='login'>
          <i className='fa fa-sign-out fa-fw' />
          Logout
        </MenuItem>
      </NavDropdown>
    );
  }
}
