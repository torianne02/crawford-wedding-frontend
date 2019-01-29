import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Guests from '../components/guests/Guests';
// import { fetchAllRsvps } from '../actions/rsvpActions';

class GuestListContainer extends Component {
  constructor(props) {
    super(props);
    console.log('in constructor')
    this.state = {
      guests: ['Tori', 'Kevin']
    };
  }

  componentDidMount() {
    // need to write fetch statement
    console.log("in component did mount")
    console.log(this.state)
  }

  // need to have methods for onSubmit and onChange of form

  render() {
    return (
      "GuestList Container entered!"
    )
    // return <Guests guests={this.state.guests} />
    // need to render form
  }
}


export default GuestListContainer
// export default connect( mapStateToProps )( GuestListContainer )
