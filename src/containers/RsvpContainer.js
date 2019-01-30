import React, { Component } from 'react';
import RsvpForm from '../components/rsvps/RsvpForm';

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

 attendeesToInt = () => {
    const num_attendees = parseInt(this.state.attendees)
    return num_attendees
  }

  validate = () => {
    if ( !isNaN(this.state.attendees) ) {
      return alert('Please enter valid number attending')
    } else {
      this.setState({
        attendees: this.attendeesToInt(),
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

export default RsvpContainer
// export default connect( mapStateToProps )( RsvpContainer )
