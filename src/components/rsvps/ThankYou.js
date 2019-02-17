import React from 'react';
import { Alert } from 'reactstrap';

const ThankYou = (props) =>
  <div className="thank-you">
    <Alert color="info">
      Thank you { this.props.location.state.name }!
    </Alert>
  </div>

export default ThankYou
