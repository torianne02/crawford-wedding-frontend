import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guests from '../components/guests/Guests';

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

  render() {
    return <Guests guests={this.state.books} />
  }
}
