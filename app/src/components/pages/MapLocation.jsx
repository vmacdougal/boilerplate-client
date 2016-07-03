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
		  <Input type='text' label='Latitude' placeholder='latitude' name='latitude' id='latitude'/>
		  </Col>
		  <Col xs={6}>
		  <Input type='text' label='Longitude' placeholder='longitude' name='longitude' id='longitude'/>
		  </Col>
		  </div>
	      </fieldset>
            </form>
          </Panel>
        </div>
    );
  },

    setAddress: function(e) {
	console.log("Setting address to " + e.target.value.properties);
    this.setState({
      streetAddress: e.target.value,
      loginError: ''
    });
  },

    findMapLocation: function(e) {
	var address = this.state.streetAddress;
	address = address.replace(/ /g,'+');
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',+Austin,+TX&key=AIzaSyBwG8daotYRfsMPi4m1Wk-12uXUeaKEJ_k';
	var request = new Request(url,
				  {method: 'GET',
				   mode: 'cors'
				  });
	fetch(request)
	    .then(function(response) {
		return response.json();
	    })
	    .then(function(json) {
		latitude = json.results[0].geometry.location.lat;
		longitude = json.results[0].geometry.location.lng;
		document.getElementById("latitude").value = latitude;
		document.getElementById("longitude").value = longitude;
	    });
    }
});

export default MapLocationPage;
