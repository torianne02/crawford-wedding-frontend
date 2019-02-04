import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Music from '../components/music/Music';
import { fetchGuestList } from '../actions/guestListActions';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestList: []
    };
  }

  render() {
    debugger
    return (
      <div className="guestList">
        <h1>Requested Songs</h1>
        <Music guestList={ this.state.guestList }/>
      </div>
    )
  }
}

// function mapDispatchToProps( dispatch ) {
//   return { fetchGuestList: () => dispatch(fetchGuestList()) }
// }
//
// function mapStateToProps( state ) {
//   return { guests: state.guests }
// }

export default MusicContainer
// export default connect( mapStateToProps, mapDispatchToProps )( MusicContainer )
