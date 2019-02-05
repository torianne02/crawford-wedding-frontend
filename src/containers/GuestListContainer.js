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
    this.props.fetchGuestList();
  }

  render() {
    debugger
    return (
      <div className="guestList">
        <h1>Attendees</h1>
        <GuestList
          guestList={ this.state.guestList }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return { guestList: state.guestList }
}

// function mapDispatchToProps( dispatch ) {
//   return { fetchGuestList: () => dispatch(fetchGuestList()) }
// }

export default connect( mapStateToProps, { fetchGuestList } )( GuestListContainer )
