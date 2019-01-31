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

  // need to have methods for onSubmit and onChange of form

  render() {
    return (
      "Hello from GuestList Container",
      console.log(this.state.guestList),
      <div className="guestList">
        <GuestList guestList={ this.state.guestList }/>
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
