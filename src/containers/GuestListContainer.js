import React, { Component } from 'react';
import { connect } from 'react-redux';
// will need to import Guests component

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
    return <GuestList guests={this.state.books} />
  }
}
