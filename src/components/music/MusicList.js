import React from 'react';
import Song from './Song';

const MusicList = ({ rsvps }) =>
  <div className="music">
    { rsvps.filter(rsvp => rsvp.song_request !== "").map(( rsvp ) => {
      return <Song
        key={ rsvp.id }
        songTitle={ rsvp.song_request }
      />
    }) }
  </div>

export default MusicList
