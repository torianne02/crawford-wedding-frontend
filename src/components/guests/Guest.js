import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Guest = ( props ) =>
  <div>
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>{ props.name }</ListGroupItemHeading>
        <ListGroupItemText>
          Number of Guests: { props.attendees }
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>

export default Guest
