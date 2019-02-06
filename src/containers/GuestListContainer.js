import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestList from '../components/guests/GuestList';
import { fetchGuestList } from '../actions/guestListActions';

class GuestListContainer extends Component {

  componentWillMount() {
    this.props.fetchGuestList();
  }

  render() {
    return (
      <div className="guestList">
        <h1>Attendees</h1>
        <GuestList
          guestList={ this.props.guestList }
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  guestList: state.guestList.guests
})

// function mapDispatchToProps( dispatch ) {
//   return { fetchGuestList: () => dispatch(fetchGuestList()) }
// }

export default connect(mapStateToProps, { fetchGuestList })(GuestListContainer)
