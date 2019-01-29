import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

const RsvpForm = props => {

  return (
    <Form onSubmit={event => this.handleSubmit(event)}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" onChange={ props.handleNameOnChange }
              value={ props.nameValue } />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" onChange={ props.handleEmailOnChange }
              value={ props.emailValue } />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="attendees">Attendees</Label>
        <Input type="attendees" name="attendees" onChange={ props.handleAttendeesOnChange }
          value={ props.attendeesValue } />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend className="col-form-label col-sm-2">Will your party be attending?</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="accept" onChange={ props.handleAcceptOnChange }
                value={ props.acceptValue } />{' '}
              Accepts with pleasure.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="decline" onChange={ props.handleAcceptOnChange }
                value={ props.acceptValue } />{' '}
              Declines with regret.
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="song-request">Song Request</Label>
        <Input type="text" name="song-request" onChange={ props.handleSongRequestOnChange }
          value={ props.songRequestValue } />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default RsvpForm
