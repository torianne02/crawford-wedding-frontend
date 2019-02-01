import React from 'react';
import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Details = () => {
  return (
    <div className="details">
      <Row>
        <Col sm="6">
          <Card className="ceremony-details">
            <CardBody>
              <CardTitle>Ceremony</CardTitle>
              <CardText>Date: Sunday, August 09, 2020</CardText>
              <CardText>Time: 4:00pm</CardText>
              <CardText>Location: Convict Lake</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="reception-details">
            <CardBody>
              <CardTitle>Reception</CardTitle>
              <CardText>Date: Sunday, August 09, 2020</CardText>
              <CardText>Time: 6:00pm</CardText>
              <CardText>Location: Convict Lake Resort</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Details
