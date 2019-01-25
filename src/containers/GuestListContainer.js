import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guests from '../components/guests/Guests';
import RsvpForm from '../components/guests/RsvpForm';

class GuestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: []
    };
  }

  componentDidMount() {
    // need to write fetch statement
  }

  // need to have methods for onSubmit and onChange of form

  render() {
    return <Guests guests={this.state.books} />
    // need to render form
  }
}
