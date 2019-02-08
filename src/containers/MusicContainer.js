import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicList from '../components/music/MusicList';
import { fetchAllRsvps } from '../actions/rsvpActions';

class MusicContainer extends Component {

  componentWillMount() {
    this.props.fetchAllRsvps()
  }

  render() {
    return (
      <div className="guestList">
        <h1>Requested Songs</h1>
        <MusicList rsvps={ this.props.rsvps }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { rsvps: state.rsvps }
}

export default connect( mapStateToProps, { fetchAllRsvps } )( MusicContainer )
