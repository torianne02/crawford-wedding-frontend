import React, { Component } from 'react';
import RsvpForm from '../components/rsvps/RsvpForm';
import { addRsvp } from '../actions/rsvpActions';
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

  handleSubmit = event => {
    event.preventDefault();
    if (this.validate()) {
      this.props.addRsvp( this.state.name, this.state.email, this.state.accept,
        this.state.attendees, this.state.songRequest )
      this.setState({
        name: '',
        email: '',
        accept: '',
        attendees: 0,
        songRequest: '',
      })
    }
  }

  // validates that num of attendees is != 0 if accept = 'accepts'
  validate = () => {
    if ( this.state.accept === 'accepts' && parseInt(this.state.attendees) === 0 ) {
      return alert('Please enter number of guests in your party!')
    } else if ( !this.state.name || !this.state.email ) {
      return alert('Oops! Please make sure to fill out your name and email.')
    } else {
      // converts str from form input to integer for state
      this.setState({
        attendees: parseInt(this.state.attendees),
      });
      return true
    }
  }

  render() {
    return (
      <RsvpForm
        handleOnChange={ this.handleOnChange }
        nameValue={ this.state.name }
        emailValue={ this.state.email }
        acceptValue={ this.state.accept }
        attendeesValue={ this.state.attendees }
        songRequestValue={ this.state.songRequest }
      />
    )
  }
}

// will display list of people who have responded to rsvps
function mapStateToProps( state ){
  return {
    rsvps: state.rsvps
  }
}

export default connect( mapStateToProps, { addRsvp } )( RsvpContainer )
