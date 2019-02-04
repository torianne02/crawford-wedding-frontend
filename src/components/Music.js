import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Music = ( props ) => {
  return (
    <div>
      <h1>Song Requests</h1>
      <ListGroup>
        <ListGroupItem>{ props.songRequest }</ListGroupItem>
      </ListGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Music)
