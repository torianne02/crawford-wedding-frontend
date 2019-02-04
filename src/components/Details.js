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
              <CardText id="detail-label">Date:</CardText>
              <CardText>Sunday, August 09, 2020</CardText>
              <CardText id="detail-label">Time:</CardText>
              <CardText>4:00pm</CardText>
              <CardText id="detail-label">Location:</CardText>
              <CardText>Convict Lake - Shell Beach</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="reception-details">
          <CardBody>
            <CardTitle>Reception</CardTitle>
            <CardText id="detail-label">Date:</CardText>
            <CardText>Sunday, August 09, 2020</CardText>
            <CardText id="detail-label">Time:</CardText>
            <CardText>6:00pm</CardText>
            <CardText id="detail-label">Location:</CardText>
            <CardText>Convict Lake Resort</CardText>
          </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Details
