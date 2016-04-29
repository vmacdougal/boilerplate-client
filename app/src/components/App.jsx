import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Heading from './Heading.jsx';
import StateUpdate from './StateUpdate.jsx';

const Home = () => <div><Links /><Heading txt="Home" /></div>;
const About = () => <div><Links /><Heading txt="About" /></div>;
const Contact = (props) =>
  <div>
    <Links />
    <Heading txt="Contact" />
    <UserLinks />
    {props.children}
  </div>;
const Message = (props) =>
  <div>
    <Heading txt={props.params.user} />
    <StateUpdate />
  </div>;
const Links = () =>
  <nav>
    <Link to="/">Home</Link><br />
    <Link to="/about">About</Link><br />
    <Link to="/contact">Contact</Link><br />
  </nav>;
const UserLinks = () =>
  <nav>
    <Link to="/contact/bob">Contact Bob</Link><br />
    <Link to="/contact/john">Contact John</Link><br />
    <Link to="/contact/mary">Contact Mary</Link>
  </nav>;


const App = function app() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}>
        <Route path="(:user)" component={Message} />
      </Route>
    </Router>
  );
};

export default App;
