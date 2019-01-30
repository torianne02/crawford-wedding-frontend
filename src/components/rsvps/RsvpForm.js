import React from 'react';
import {  Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RsvpForm = props => {

  return (
    <Form onSubmit={event => this.handleSubmit(event)}>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="name" hidden>Name</Label>
            <Input type="text"
              name="name"
              placeholder="Full Name"
              onChange={ props.handleNameOnChange }
              value={ props.nameValue } />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="email" hidden>Email</Label>
            <Input type="email"
              name="email"
              placeholder="Email"
              onChange={ props.handleEmailOnChange }
              value={ props.emailValue } />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="attendees" hidden>Number in Party</Label>
            <Input type="number"
              name="attendees"
              placeholder="Number in Party"
              onChange={ props.handleAttendeesOnChange }
              value={ props.attendeesValue } />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="songRequest" hidden>Song Request</Label>
            <Input type="text"
              name="songRequest"
              placeholder="Song Request"
              onChange={ props.handleSongRequestOnChange }
              value={ props.songRequestValue } />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup tag="fieldset">
        <legend className="col-form-label col-sm-2">Will your party be attending?</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio"
                name="accept"
                onChange={ props.handleAcceptOnChange }
                value="accepts" checked={props.acceptValue === "accepts"} />{' '}
              Accepts with pleasure.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio"
                name="accept"
                onChange={ props.handleAcceptOnChange }
                value="declines" checked={props.acceptValue === "declines"} />{' '}
              Declines with regret.
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default RsvpForm
