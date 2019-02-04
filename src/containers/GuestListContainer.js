import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestList from '../components/guests/GuestList';
import { fetchGuestList } from '../actions/guestListActions';

class GuestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: []
    };
  }

  componentDidMount() {
    // let guestList = this.fetchGuestList()
    // this.setState({
    //   guestList: guestList
    // })
    fetch(`http://localhost:3001/attending`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(guestList => this.setState({ guestList }))
  }

  render() {
    return (
      <div className="guestList">
        <h1>Attendees</h1>
        <GuestList guestList={ this.state.guestList }/>
      </div>
    )
  }
}

function mapDispatchToProps( dispatch ) {
  return { fetchGuestList: () => dispatch(fetchGuestList()) }
}

function mapStateToProps( state ) {
  debugger
  return { guestList: state.guestList }
}

export default connect( mapStateToProps, mapDispatchToProps )( GuestListContainer )
