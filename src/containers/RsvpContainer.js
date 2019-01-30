import React, { Component } from 'react';
import RsvpForm from '../components/rsvps/RsvpForm';

class RsvpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      accept: '',
      songRequest: '',
      attendees: 0,
    };
  }

  handleNameOnChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmailOnChange = event => {
    this.setState({
      email: event.target.value,
    });
  }

  handleAcceptOnChange = event => {
    this.setState({
      accept: event.target.value,
    });
  }

  handleAttendeesOnChange = event => {
    this.setState({
      attendees: event.target.value,
    });
  }

  handleSongRequestOnChange = event => {
    this.setState({
      songRequest: event.target.value,
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

  validate = () => {
    if ( !this.state.accept ) {
      return alert('Please mark attendance status')
    }
    return true
  }

  render() {
    return (
      <RsvpForm
        nameValue={ this.state.name }
        handleNameOnChange={ this.handleNameOnChange }
        emailValue={ this.state.email }
        handleEmailOnChange={ this.handleEmailOnChange }
        acceptValue={ this.state.accept }
        handleAcceptOnChange={ this.handleAcceptOnChange }
        attendeesValue={ this.state.attendees }
        handleAttendeesOnChange={ this.handleAttendeesOnChange }
        songRequestValue={ this.state.songRequest }
        handleSongRequestOnChange={ this.handleSongRequestOnChange }
      />
    )
  }
}

export default RsvpContainer
// export default connect( mapStateToProps )( RsvpContainer )
