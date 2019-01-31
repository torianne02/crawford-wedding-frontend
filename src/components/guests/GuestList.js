import React from 'react';
import Guest from './Guest';

const GuestList = ( {guestList} ) => {

  return (
    <div className="guest-list">
      { guestList.map(( guest ) => {
          return <Guest key={ guest.id } name={ guest.name } songRequest={ guest.song_request } />
        })
      }
    </div>
  );
}

export default GuestList
