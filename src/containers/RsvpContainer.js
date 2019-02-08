import React, { Component } from 'react';
import RsvpForm from '../components/rsvps/RsvpForm';
import ThankYou from '../components/rsvps/ThankYou';
import { createRsvp } from '../actions/rsvpActions';
import { connect } from 'react-redux';

class RsvpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      accept: 'accepts',
      songRequest: '',
      attendees: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const rsvp = {
      name: this.state.name,
      email: this.state.email,
      accept: this.state.accept,
      attendees: this.attendeesToInt(),
      song_request: this.state.songRequest
    }

    if (this.validate()) {
      this.props.createRsvp(rsvp)
      this.setState({
        name: '',
        email: '',
        accept: '',
        attendees: 0,
        songRequest: '',
      })
      return (
        <ThankYou
          name={this.props.rsvp.name}
        />
      )
    }
  }

  attendeesToInt = () => {
   const num_attendees = parseInt(this.state.attendees)
   this.setState({
     attendees: num_attendees
   })
   return num_attendees
  }

  // validates that num of attendees is != 0 if accept = 'accepts'
  validate = () => {
    if ( this.state.accept === 'accepts' && parseInt(this.state.attendees) === 0 ) {
      return alert('Please enter number of guests in your party!')
    } else if ( !this.state.name || !this.state.email ) {
      return alert('Oops! Please make sure to fill out your name and email.')
    } else {
      return true
    }
  }

  render() {
    return (
      <div className="rsvp-form">
        <h1>RSVP</h1>
        <RsvpForm
          nameValue={ this.state.name }
          emailValue={ this.state.email }
          acceptValue={ this.state.accept }
          attendeesValue={ this.state.attendees }
          songRequestValue={ this.state.songRequest }
          handleOnChange={ this.handleOnChange }
          handleOnSubmit={ this.handleOnSubmit }
        />
      </div>
    )
  }
}

// want to add 'thank you ${rsvp.name} for rsvping' card after form submission
const mapStateToProps = state => {
  return { rsvp: state.rsvps.rsvp }
}

export default connect( mapStateToProps, { createRsvp } )( RsvpContainer )
