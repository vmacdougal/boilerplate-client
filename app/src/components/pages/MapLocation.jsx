import React from 'react';
import {Router} from 'react-router';
import {Panel, Input, Button, Row, Col} from 'react-bootstrap';

var MapLocationPage = React.createClass({

  getInitialState: function(){
    return {
      streetAddress: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [Router.Navigation],

  render: function(){
    return (
      <div className='col-md-4 col-md-offset-4'>
          <div className='text-center'>
            <h3 className='text-muted'>Map My Address</h3>
          </div>
          <Panel header={<h3>Map Address</h3>}>
            <form role='form' onSubmit={this.findMapLocation}>
              <fieldset>
                <div className='form-group'>
                  <Input onChange={this.setAddress} className='form-control' placeholder='Street Address' ref='streetAddress' type='text' autofocus='' name='address' />
                </div>
                <Button type='submit' bsSize='large' bsStyle='success' block>Map My Location</Button>
              </fieldset>
	      <fieldset>
		<div className='row'>
		  <Col xs={6}>
		  <Input type='text' label='Latitude' placeholder='latitude'/>
		  </Col>
		  <Col xs={6}>
		  <Input type='text' label='Longitude' placeholder='longitude'/>
		  </Col>
		  </div>
	      </fieldset>
            </form>
          </Panel>
        </div>
    );
  },

  setAddress: function(e) {
    this.setState({
      address: e.target.value,
      loginError: ''
    });
  },

  handleLogin: function(e){
    this.transitionTo('dashboard');
    return false;
  }

});

export default MapLocationPage;
