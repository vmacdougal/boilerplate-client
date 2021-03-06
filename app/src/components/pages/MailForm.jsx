import React from 'react';
import {Panel, Button, Input, Row, Col, PageHeader, FormControls} from 'react-bootstrap';

var MailForm = React.createClass({
  render: function() {

    return (
      <div>

        <div className='row'>
          <div className='col-lg-12'>
            <PageHeader>Mail Form</PageHeader>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>

            <Panel header={<span>Contact a Lead</span>} >
              <h4><strong>Please select the lead or Area Facilitator you wish to contact from the list below.</strong></h4>
              <div className='row'>
                <div className='col-lg-6'>
                  <form>
		    <h5><strong>Area: 24x7x360 </strong></h5>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='360 Area Facilitator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Church Night Coordinator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Equipment Librarian' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Off-season Events Coordinator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Regional Outreach' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Warehouse Managers' />
                      </Col>
                    </Row>
		    <h5><strong>Area: Art </strong></h5>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Art Area Facilitator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Art Installation Logistics' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Burnable Art' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Burn Night Coordinator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Commons Host' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Department of Mutant Vehicles' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Graphic Arts' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sticker Design' />
                      </Col>
                    </Row>
		    <h5><strong>Area: City Planning </strong></h5>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='City Planning Area Facilitator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Cartography' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='City Signage' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Disinformation Kiosks' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Placement' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Theme Camp Liason' />
                      </Col>
                    </Row>


                    {/*
                      /Users/coderonin/AAR/Boilerplates/client_boilerplate/app/src/components/pages/dashboard/Forms.jsx:
                      Property object of JSXMemberExpression expected node to be of a type
                      ["JSXMemberExpression","JSXIdentifier"] but instead got "MemberExpression"

                      <FormControls.Static label='Static Control'>email@example.com</FormControls.Static>
                    */}

                  </form>
                </div>

                <div className='col-lg-6'>
                  <form>
		    <h5><strong>Area: Safety </strong></h5>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Safety Area Facilitator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Echelon' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Fire Safety' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Guardians (perimeter)' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Pets (medics)' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Rangers' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sanctuary' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sound' />
                      </Col>
                    </Row>
		    <h5><strong>Area: Site Ops </strong></h5>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Site Ops Area Facilitator' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Cartelle' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Fuel' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Guardians (perimeter)' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Pets (medics)' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Rangers' />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sanctuary' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sound' />
                      </Col>
                      <Col xs={3}>
                        <Input type='radio' name='radioY' label='Sound' />
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
	      <div className='col-lg-12'>
		<Panel header={<span>Send a Message</span>}>
		  <div>
		    <Input type='text' label='Name (required)' placeholder='Your full name' />
		    <Input type='text' label='Email (required)' placeholder='Your email address' />
		    <Input type='text' label='Subject'/>
		    <Input type='textarea' label='Message' rows='3' />
                    <Button type='submit'>Send</Button>
		  </div>
		</Panel>
	      </div>
            </Panel>
          </div>
        </div>
      </div>
    );

  }
});

export default MailForm;
