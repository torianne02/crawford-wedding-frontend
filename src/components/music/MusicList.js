import React from 'react';
import Song from './Song';

const MusicList = ({ rsvps }) =>
  <div className="music">
    { rsvps.map(( rsvp ) => {
      if (rsvp.song_request !== "") {
        return <Song
          key={ rsvp.id }
          songTitle={ rsvp.song_request }
        />
      }
    }) }
  </div>

export default MusicList
