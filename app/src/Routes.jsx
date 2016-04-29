import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import BaseLayout from 'layouts/Base';
import DashboardLayout from 'layouts/Dashboard.jsx';

import DashboardBlankPage from 'pages/Blank';
import DashboardButtonsPage from 'pages/Buttons';
import DashboardFormsPage from 'pages/Forms';
import DashboardGridPage from 'pages/Grid';
import DashboardHomePage from 'pages/Home';
import DashboardIconsPage from 'pages/Icons';
import DashboardNotificationsPage from 'pages/Notifications';
import DashboardPanelsWellsPage from 'pages/PanelsWells';
import DashboardReChartsPage from 'pages/Recharts';
import DashboardTablesPage from 'pages/Tables';
import DashboardTypographyPage from 'pages/Typography';
import LoginPage from 'pages/Login';
import LogoutPage from 'pages/Logout';
import RedditPage from 'components/Reddit';

var Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Redirect path='/' to='/home' />
        <Route path='/' component={BaseLayout}>
          <Route path='/dashboard' component={DashboardLayout}>
            <Route path='/home' component={DashboardHomePage} />
            <Route path='/recharts' component={DashboardReChartsPage} />
            <Route path='/forms' component={DashboardFormsPage} />
            <Route path='/tables' component={DashboardTablesPage} />
            <Route path='/panels-wells' component={DashboardPanelsWellsPage} />
            <Route path='/buttons' component={DashboardButtonsPage} />
            <Route path='/notifications' component={DashboardNotificationsPage} />
            <Route path='/typography' component={DashboardTypographyPage} />
            <Route path='/icons' component={DashboardIconsPage} />
            <Route path='/grid' component={DashboardGridPage} />
            <Route path='/blank' component={DashboardBlankPage} />
            <Route path='/reddit' component={RedditPage} />
          </Route>
          <Route path='/login' component={LoginPage} />
          <Route path='/logout' component={LogoutPage} />
        </Route>
      </Router>
    );
  }
});

export default Routes;
