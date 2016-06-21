import React, { Component } from 'react';
import { Button, ButtonToolbar, Col, Panel, Row } from 'react-bootstrap';
import Links from './Links.jsx';
import Heading from './Heading.jsx';

class Bootstrap extends Component {

  render() {
    return (
      <div>
        <Links />
        <Heading txt="Bootstrap" />

        <div className='container'>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle='primary'>Primary</Button>
            <Button bsStyle='success'>Success</Button>
            <Button bsStyle='info'>Info</Button>
            <Button bsStyle='warning'>Warning</Button>
            <Button bsStyle='danger'>Danger</Button>
            <Button bsStyle='link'>Link</Button>
          </ButtonToolbar>
        </div>
        <br />

        <div className='container'>
          <Row>
            <Col xs={12} md={8}>
              <Panel header={<span>Col xs={12} md={8}</span>} />
            </Col>
            <Col xs={6} md={4}>
              <Panel header={<span>Col xs={6} md={4}</span>} />
            </Col>
          </Row>
        </div>

        <div className='container'>
          <Row>
            <Col xs={6} md={4}>
              <Panel header={<span>Col xs={6} md={6}</span>} />
            </Col>
            <Col xs={6} md={4}>
              <Panel header={<span>Col xs={6} md={4}</span>} />
            </Col>
            <Col xsHidden md={4}>
              <Panel header={<span>Col xshidden md={4}</span>} />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col md={6} mdPush={6}>
              <Panel header={<span>Col md={6} mdPush={6}</span>} />
            </Col>
            <Col md={6} mdPull={6}>
              <Panel header={<span>Col md={6} mdPull={6}</span>} />
            </Col>
          </Row>
        </div>

      </div>
    );
  }
};

export default Bootstrap;
