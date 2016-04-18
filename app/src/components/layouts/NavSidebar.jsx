import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import $ from 'jquery';

var NavSidebar = React.createClass({
  getInitialState: function(){
    return {
      uiElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      chartsElementsCollapsed: true
    };
  },
  toggleMenu: function(){
    $('.navbar-collapse').addClass('collapse');
  },

  render: function() {
    return (
      <div className='navbar-default sidebar' style={ {'marginLeft': '-20px', 'clear': 'left'} } role='navigation'>
        <div className='sidebar-nav navbar-collapse collapse'>
          <ul className='nav in' id='side-menu'>

            <li className='sidebar-search'>
              <div className='input-group custom-search-form'>
                <input type='text' className='form-control' placeholder='Search...' />
                <span className='input-group-btn'>
                  <button className='btn btn-default' type='button'>
                    <i className='fa fa-search'></i>
                  </button>
                </span>
              </div>
            </li>

            <li>
              <Link to='/home' onClick={this.toggleMenu}>
                <i className='fa fa-dashboard fa-fw' /> &nbsp;
                Dashboard
              </Link>
            </li>

            <li className={classNames({'active': !this.state.chartsElementsCollapsed})}>
              <a href='javascript:void(0)' onClick={ () => {
                this.setState({chartsElementsCollapsed: !this.state.chartsElementsCollapsed});
                return false;
              } }>
                <i className='fa fa-bar-chart-o fa-fw' /> &nbsp;
                Charts
                <span className='fa arrow' />
              </a>
              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.chartsElementsCollapsed})}>
                <li>
                  <Link to='/flot-charts' onClick={this.toggleMenu}>
                    Flot Charts
                  </Link>
                </li>
                <li>
                  <Link to='/morrisjs-charts' onClick={this.toggleMenu}>
                    Morris.js Charts
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to='/tables' onClick={this.toggleMenu}>
                <i className='fa fa-table fa-fw' /> &nbsp;
                Tables
              </Link>
            </li>

            <li>
              <Link to='/forms' onClick={this.toggleMenu}>
                <i className='fa fa-edit fa-fw'/> &nbsp;
                Forms
              </Link>
            </li>

            <li className={classNames({'active': !this.state.uiElementsCollapsed})}>
              <a href='javascript:void(0)' onClick={ () => {
                this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed});
                return false;
              } }>
                <i className='fa fa-edit fa-fw' /> &nbsp;
                UI Elements
                <span className='fa arrow' />
              </a>

              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                <li>
                  <Link to='/panels-wells' onClick={this.toggleMenu}>
                    Panels and Wells
                  </Link>
                </li>
                <li>
                  <Link to='/buttons' onClick={this.toggleMenu}>
                    Buttons
                  </Link>
                </li>
                <li>
                  <Link to='/notifications' onClick={this.toggleMenu}>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to='/typography' onClick={this.toggleMenu}>
                    Typography
                  </Link>
                </li>
                <li>
                  <Link to='/icons' onClick={this.toggleMenu}>
                    Icons
                  </Link>
                </li>
                <li>
                  <Link to='/grid' onClick={this.toggleMenu}>
                    Grid
                  </Link>
                </li>
              </ul>
            </li>

            <li className={classNames({'active': !this.state.multiLevelDropdownCollapsed})}>
              <a href='javascript:void(0)' onClick={ () => {
                this.setState({multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed});
                return false;
              } }>
                <i className='fa fa-sitemap fa-fw' /> &nbsp;
                Multi-Level Dropdown
                <span className='fa arrow' />
              </a>
              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.multiLevelDropdownCollapsed})}>
                <li>
                  <a href='javascript:void(0)' onClick={this.toggleMenu}>
                    Second Level Item
                  </a>
                </li>
                <li>
                  <a href='javascript:void(0)' onClick={this.toggleMenu}>
                    Second Level Item
                  </a>
                </li>
                <li className={classNames({'active': !this.state.thirdLevelDropdownCollapsed})}>
                  <a href='javascript:void(0)' onClick={ () => {
                    this.setState({thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed});
                    return false;
                  } }>
                    Third Level<span className='fa arrow'></span>
                  </a>

                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.thirdLevelDropdownCollapsed})}>
                    <li>
                      <Link to='javascript:void(0)' onClick={this.toggleMenu}>
                        Third Level Item
                      </Link>
                    </li>
                    <li>
                      <Link to='javascript:void(0)' onClick={this.toggleMenu}>
                        Third Level Item
                      </Link>
                    </li>
                    <li>
                      <Link to='javascript:void(0)' onClick={this.toggleMenu}>
                        Third Level Item
                      </Link>
                    </li>
                    <li>
                      <Link to='javascript:void(0)' onClick={this.toggleMenu}>
                        Third Level Item
                      </Link>
                    </li>
                  </ul>

                </li>
              </ul>
            </li>

            <li className={classNames({'active': !this.state.samplePagesCollapsed})}>
              <a href='javascript:void(0)' onClick={ () => {
                this.setState({samplePagesCollapsed: !this.state.samplePagesCollapsed});
                return false;
              } }>
                <i className='fa fa-files-o fa-fw' />
                &nbsp;
                Sample Pages
                <span className='fa arrow' />
              </a>

              <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.samplePagesCollapsed})}>
                <li>
                  <Link to='/blank' onClick={this.toggleMenu}>
                    Blank Page
                  </Link>
                </li>
                <li>
                  <Link to='login' onClick={this.toggleMenu}>
                    Login Page
                  </Link>
                </li>
              </ul>

            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default NavSidebar;
