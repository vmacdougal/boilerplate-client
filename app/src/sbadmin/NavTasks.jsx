import React, { Component } from 'react';
import { NavDropdown, MenuItem, ProgressBar } from 'react-bootstrap';

export default class NavTasks extends Component {
  render() {
    return (
      <NavDropdown title=<i className='fa fa-tasks fa-fw' /> id='tasksNav'>
        <MenuItem eventKey='1' style={{ width: 300 }}>
          <div>
            <p>
              <strong>Task 1</strong>
              <span className='pull-right text-muted'>40% Complete</span>
            </p>
            <div>
              <ProgressBar active bsStyle='success' now={40} />
            </div>
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='2'>
          <div>
            <p>
              <strong>Task 2</strong>
              <span className='pull-right text-muted'>20% Complete</span>
            </p>
            <div>
              <ProgressBar active bsStyle='info' now={20} />
            </div>
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='3'>
          <div>
            <p>
              <strong>Task 3</strong>
              <span className='pull-right text-muted'>60% Complete</span>
            </p>
            <div>
              <ProgressBar active bsStyle='warning' now={60} />
            </div>
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='4'>
          <div>
            <p>
              <strong>Task 4</strong>
              <span className='pull-right text-muted'>80% Complete</span>
            </p>
            <div>
              <ProgressBar active bsStyle='danger' now={80} />
            </div>
          </div>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey='5'>
          <strong>See All Tasks</strong>
          <i className='fa fa-angle-right' />
        </MenuItem>

      </NavDropdown>
    );
  }
}
