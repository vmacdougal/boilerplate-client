import React from 'react';
import { render } from 'react-dom';
import Routes from './sbadmin/Routes.jsx';
import './application.css';

render(
  <Routes />,
  document.getElementById('app')
);
