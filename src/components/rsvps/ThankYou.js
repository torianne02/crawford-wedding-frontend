import React from 'react';
import { Alert } from 'reactstrap';

const ThankYou = ({ rsvp }) =>
  <div className="thank-you">
    <Alert color="info">
      Thank you { rsvp.name }!
    </Alert>
  </div>

export default ThankYou
