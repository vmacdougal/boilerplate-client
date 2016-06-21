import React, { Component } from 'react';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import BaseLayout from './Base.jsx';
import DashboardLayout from './Dashboard.jsx';
import DashboardBlankPage from './PageBlank.jsx';
import DashboardButtonsPage from './PageButtons.jsx';
import DashboardFormsPage from './PageForms.jsx';
import DashboardGridPage from './PageGrid.jsx';
import DashboardHomePage from './PageHome.jsx';
import DashboardIconsPage from './PageIcons.jsx';
import DashboardNotificationsPage from './PageNotifications.jsx';
import DashboardPanelsWellsPage from './PagePanelsWells.jsx';
import DashboardReChartsPage from './PageRecharts.jsx';
import DashboardTablesPage from './PageTables.jsx';
import DashboardTypographyPage from './PageTypography.jsx';
import LoginPage from './PageLogin.jsx';
import LogoutPage from './PageLogout.jsx';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
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
          </Route>
          <Route path='/login' component={LoginPage} />
          <Route path='/logout' component={LogoutPage} />
        </Route>
      </Router>
    );
  }
}
