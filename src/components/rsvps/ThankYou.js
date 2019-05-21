import React, { Component } from 'react';
import { Card, CardText, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class ThankYou extends Component {
  render() {
    return (
      <div className="thank-you">
        <Card>
          <CardBody>
            <CardTitle>
              Thank you for your response, { this.props.rsvp.name }.
            </CardTitle>
            <CardText>
              If the below information is incorrect, please reach out to Victoria
              and/or Kevin.
            </CardText>

            <CardSubtitle>RSVP Status:</CardSubtitle>
            <CardText>{this.props.rsvp.accept}</CardText>
            <CardSubtitle>Number of Guests Attending:</CardSubtitle>
            <CardText>{this.props.rsvp.attendees}</CardText>
            <CardSubtitle>Song Request:</CardSubtitle>
            <CardText>{this.props.rsvp.song_request}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { rsvp: state.rsvps.rsvp }
}

export default connect(mapStateToProps)(withRouter(ThankYou))
