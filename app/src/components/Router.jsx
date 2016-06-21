import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import PageAbout from './PageAbout.jsx';
import PageContact from './PageContact.jsx';
import PageHome from './PageHome.jsx';
import PageMessage from './PageMessage.jsx';
import PageBootstrap from './PageBootstrap.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={PageHome} />
        <Route path="/bootstrap" component={PageBootstrap} />
        <Route path="/about" component={PageAbout} />
        <Route path="/contact" component={PageContact}>
          <Route path="(:user)" component={PageMessage} />
        </Route>
      </Router>
    );
  }
}
