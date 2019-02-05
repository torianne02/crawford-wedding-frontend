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
    this.props.fetchGuestList()
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

function mapStateToProps( state ) {
  return { guestList: state.guestList }
}

function mapDispatchToProps( dispatch ) {
  return { fetchGuestList: () => dispatch(fetchGuestList()) }
}

export default connect( mapStateToProps, mapDispatchToProps )( GuestListContainer )
