import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';

var NavHeader = React.createClass({
  render: function() {
    return (
      <NavDropdown title=<i className='fa fa-bell fa-fw' />  id='alertsNav'>
        <MenuItem eventKey='1' style={ {width: 300} }>
          <div>
            <i className='fa fa-comment fa-fw' />
            New Comment
            <span className='pull-right text-muted small'>4 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='2'>
          <div>
            <i className='fa fa-twitter fa-fw' />
            3 New Followers
            <span className='pull-right text-muted small'>12 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='3'>
          <div>
            <i className='fa fa-envelope fa-fw' />
            Message Sent
            <span className='pull-right text-muted small'>4 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>
          <div>
            <i className='fa fa-tasks fa-fw' />
            New Task
            <span className='pull-right text-muted small'>4 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='5'>
          <div>
            <i className='fa fa-upload fa-fw' />
            Server Rebooted
            <span className='pull-right text-muted small'>4 minutes ago</span>
          </div>
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='6'>
          <strong>See All Alerts</strong>
          <i className='fa fa-angle-right' />
        </MenuItem>
      </NavDropdown>
    );
  }
});

export default NavHeader;
