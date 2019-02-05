import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllRsvps } from '../actions/rsvpActions';

class GuestSliderContainer extends Component {

}

export default connect(mapStateToProps, mapDispatchToProps)(GuestSliderContainer)
