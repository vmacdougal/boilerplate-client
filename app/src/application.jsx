import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router.jsx';
import './application.css';

render(
  <Router />,
  document.getElementById('app')
);
