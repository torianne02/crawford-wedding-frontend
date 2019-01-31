import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestList from '../components/guests/GuestList';
import { fetchGuestList } from '../actions/guestListActions';

class GuestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: [{name: 'Tori', id: 1}, {name: 'Kevin', id: 2}]
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
      <div className="guestList">
        <GuestList props={this.state.guestList}/>
      </div>
    )
    // return <Guests guests={this.state.guests} />
    // need to render form
  }
}

function mapDispatchToProps( dispatch ) {
  return { fetchGuestList: () => dispatch(fetchGuestList()) }
}

function mapStateToProps( state ) {
  return { guests: state.guests }
}

export default connect( mapStateToProps, mapDispatchToProps )( GuestListContainer )
