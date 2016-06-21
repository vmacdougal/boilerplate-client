import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class Blank extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <PageHeader>Blank</PageHeader>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
