import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuestList } from '../actions/guestListActions';

class ShowGuestContainer extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  }

  componentDidMount() {
    this.props.fetchGuestList()
  }

  goToPrevGuest
}

const mapStateToProps = state => {
  return { guestList: state.guestList }
}

const mapDispatchToProps = dispatch => {
  return { fetchGuestList: () => dispatch( fetchGuestList() )}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGuestContainer)
