import React, { Component } from 'react';
import { MenuItem, DropdownButton, Panel, PageHeader, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import StatWidget from './StatWidget.js';
import PositiveNegativeBarChart from './charts/PositiveNegativeBarChart.jsx';
import StackedAreaChart from './charts/StackedAreaChart.jsx';
import LineBarAreaComposedChart from './charts/LineBarAreaComposedChart.jsx';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            <PageHeader>Dashboard</PageHeader>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <StatWidget style='primary'
              icon='fa fa-comments fa-5x'
              count='26'
              headerText='New Comments!'
              footerText='View Details'
              linkTo='/' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <StatWidget style='green'
              icon = 'fa fa-tasks fa-5x'
              count = '12'
              headerText='New Tasks!'
              footerText='View Details'
              linkTo='/' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <StatWidget style='yellow'
              icon='fa fa-shopping-cart fa-5x'
              count='124'
              headerText='New Orders!'
              footerText='View Details'
              linkTo='/' />
          </div>
          <div className='col-lg-3 col-md-6'>
            <StatWidget style='red'
              icon='fa fa-support fa-5x'
              count='13'
              headerText='Support Tickets!'
              footerText='View Details'
              linkTo='/' />
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8'>

            <Panel header={<span>
              <i className='fa fa-bar-chart-o fa-fw' />
              Area Chart Example
              <div className='pull-right'>
                <DropdownButton id='acDrop' title='Dropdown' bsSize='xs' pullRight>
                  <MenuItem eventKey='1'>Action</MenuItem>
                  <MenuItem eventKey='2'>Another action</MenuItem>
                  <MenuItem eventKey='3'>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey='4'>Separated link</MenuItem>
                </DropdownButton>
              </div>
              </span>}
            >
              <div>
                <StackedAreaChart />
              </div>
            </Panel>

            <Panel header={<span>
              <i className='fa fa-bar-chart-o fa-fw' /> Bar Chart Example
                  <div className='pull-right'>
                      <DropdownButton id='bcDrop' title='Dropdown' bsSize='xs' pullRight>
                        <MenuItem eventKey='1'>Action</MenuItem>
                        <MenuItem eventKey='2'>Another action</MenuItem>
                        <MenuItem eventKey='3'>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey='4'>Separated link</MenuItem>
                      </DropdownButton>
                  </div>
              </span>}
            >
              <PositiveNegativeBarChart />
            </Panel>

            <Panel header={<span>
              <i className='fa fa-clock-o fa-fw' /> Responsive Timeline
              </span>}
            >
              <div>
                Panel contents
              </div>
            </Panel>

          </div>

          <div className='col-lg-4'>

            <Panel header={<span>
              <i className='fa fa-bell fa-fw' /> Notifications Panel
              </span>}
            >
              <ListGroup>
                <ListGroupItem href='#'><i className='fa fa-comment fa-fw' /> New Comment
                  <span className='pull-right text-muted small'><em>4 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-twitter fa-fw' /> 3 New Followers
                  <span className='pull-right text-muted small'><em>12 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-envelope fa-fw' /> Message Sent
                  <span className='pull-right text-muted small'><em>27 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-tasks fa-fw' /> New Task
                  <span className='pull-right text-muted small'><em>43 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-upload fa-fw' /> Server Rebooted
                  <span className='pull-right text-muted small'><em>11:32 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-bolt fa-fw' /> Server Crashed!
                  <span className='pull-right text-muted small'><em>11:13 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-warning fa-fw' /> Server Not Responding
                  <span className='pull-right text-muted small'><em>10:57 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-shopping-cart fa-fw' /> New Order Placed
                  <span className='pull-right text-muted small'><em>9:49 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href='#'>
                  <i className='fa fa-money fa-fw' /> Payment Received
                  <span className='pull-right text-muted small'><em>Yesterday</em></span>
                </ListGroupItem>
              </ListGroup>
              <Button block>View All Alerts</Button>
            </Panel>

            <Panel header={<span>
              <i className='fa fa-bar-chart-o fa-fw' /> Line Area Composed Chart Example
              </span>}
            >
              <div>
                <LineBarAreaComposedChart />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}
