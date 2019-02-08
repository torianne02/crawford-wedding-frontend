import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const Song = ( props ) =>
  <div>
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemText>
          { props.songTitle }
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>

export default Song
