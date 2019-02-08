import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const MusicList = ({ rsvps }) =>
  <div className="music">
    { rsvps.map(( rsvp ) => {
      if (rsvp.songRequest != "") {
        return <Song
          key={ rsvp.id }
          name={ rsvp.songRequest }
        />
      }
    }) }
  </div>

export default MusicList
