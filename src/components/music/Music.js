import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

const Music = guestList => {
  return (
    <div className="music">
      { guestList.map(( guest ) => {
          return (
            <ListGroup>
              <ListGroupItem>
                { guest.songRequest }
              </ListGroupItem>
            </ListGroup>
          )
        })
      }
    </div>
  );
}

const mapStateToProps = state => ({
  guestList: state
})

export default connect(mapStateToProps)(Music);
