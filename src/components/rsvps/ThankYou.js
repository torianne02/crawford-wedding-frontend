import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class ThankYou extends Component {
  render() {
    debugger;
    return (
      <div className="thank-you">
        <Alert color="info">
          Thank you { this.props.rsvp.name }!
        </Alert>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { rsvp: state.rsvps.rsvp }
}

export default connect(mapStateToProps)(withRouter(ThankYou))
