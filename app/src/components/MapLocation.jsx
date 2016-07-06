import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'configureStore';
import AsyncMapApp from './AsyncMapApp';

const store = configureStore();

export default class MapLocation extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncMapApp />
      </Provider>
    );
  };
};