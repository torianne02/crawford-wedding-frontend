import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return { rsvps: state.rsvps }
}

export default connect(mapStateToProps)(Music);
