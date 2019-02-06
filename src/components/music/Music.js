import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Music = rsvps => {
  return (
    <div className="music">
      { rsvps.map(( rsvp ) => {
          return (
            <ListGroup>
              <ListGroupItem>
                { rsvp.songRequest }
              </ListGroupItem>
            </ListGroup>
          )
        })
      }
    </div>
  );
}

export default Music
