import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';

var NavMessages = React.createClass({
  render: function() {
    return (
      <NavDropdown title=<i className='fa fa-envelope fa-fw'/> id='messagesNav'>

        <MenuItem eventKey='1'>
          <div>
            <strong>John Smith</strong>
            <span className='pull-right text-muted'>
              <em>Yesterday</em>
            </span>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='2'>
          <div>
            <strong>John Smith</strong>
            <span className='pull-right text-muted'>
              <em>Yesterday</em>
            </span>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='3'>
          <div>
            <strong>John Smith</strong>
            <span className='pull-right text-muted'>
              <em>Yesterday</em>
            </span>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='4'>
          <strong>Read All Messages</strong>
          <i className='fa fa-angle-right' />
        </MenuItem>

      </NavDropdown>
    );
  }
});

export default NavMessages;
