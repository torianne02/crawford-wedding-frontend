import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RsvpForm = props => {

  return (
    <Container className="RSVP">
      <Form onSubmit={ props.handleOnSubmit }>
        <Col>
          <FormGroup>
            <Label for="name" hidden>Name</Label>
            <Input type="text"
              name="name"
              placeholder="Full Name"
              onChange={ props.handleOnChange }
              value={ props.nameValue } />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email" hidden>Email</Label>
            <Input type="email"
              name="email"
              placeholder="Email"
              onChange={ props.handleOnChange }
              value={ props.emailValue } />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="songRequest" hidden>Song Request</Label>
            <Input type="text"
              name="songRequest"
              placeholder="Song Request"
              onChange={ props.handleOnChange }
              value={ props.songRequestValue } />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="attendees">Number of Guests Attending</Label>
            <Input type="number"
              name="attendees"
              onChange={ props.handleOnChange }
              value={ props.attendeesValue } />
          </FormGroup>
        </Col>
        <FormGroup tag="fieldset">
          <legend className="col-form-label col-md-6">Will your party be attending?</legend>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="accept"
                  onChange={ props.handleOnChange }
                  value="accepts"
                  checked={props.acceptValue === "accepts"}
                />{' '}
                Accepts with pleasure.
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio"
                  name="accept"
                  onChange={ props.handleOnChange }
                  value="declines"
                  checked={props.acceptValue === "declines"}
                />{' '}
                Declines with regret.
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default RsvpForm
