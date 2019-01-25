import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  renderGuests = () => {
    return this.state.guests.map(guest => {
      return (
        <div classname="guest">
          <p>{ guest.name }</p>
          // maybe want to turn name into link for guest show page
        </div>
      )
    })
  }

  render() {
    return (
      <div className="guest-list">
        { this.renderGuests() }
      </div>
    )
  }
}
