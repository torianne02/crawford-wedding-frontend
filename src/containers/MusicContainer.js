import React, { Component } from 'react';
import { connect } from 'react-redux';
import Music from '../components/music/Music';
import { fetchAllRsvps } from '../actions/rsvpActions';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvps: []
    };
  }

  componentWillMount() {
    this.props.fetchAllRsvps()
  }

  render() {
    return (
      <div className="guestList">
        <h1>Requested Songs</h1>
        <Music rsvps={ this.state.rsvps }/>
      </div>
    )
  }
}

// function mapDispatchToProps( dispatch ) {
//   return { fetchAllRsvps: () => dispatch(fetchAllRsvps()) }
// }

const mapStateToProps = state => {
  return { rsvps: state.rsvps }
}

export default connect( mapStateToProps, mapDispatchToProps )( MusicContainer )
