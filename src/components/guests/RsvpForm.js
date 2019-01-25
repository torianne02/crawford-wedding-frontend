import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// still need to pass props into form and have onChange and onSubmit

class RsvpForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="guest-name">Name</Label>
          <Input type="text" name="guest-name" />
        </FormGroup>
        <FormGroup>
          <Label for="guest-email">Email</Label>
          <Input type="email" name="guest-email" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Will your party be attending?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Accepts with pleasure.
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Declines with regret.
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="song-requests">Song Requests</Label>
          <Input type="textarea" name="song-requests" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default RsvpForm
