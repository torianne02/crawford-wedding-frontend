import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const ThankYou = ({ rsvp }) =>
  <div className="thank-you">
    <Card className="thank-you-card">
      <CardBody>
        <CardText>Thank you { rsvp.name }!</CardText>
      </CardBody>
    </Card>
  </div>

export default ThankYou
