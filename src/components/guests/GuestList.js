import React from 'react';
import Guest from './Guest';

const GuestList = ( guestList ) => {
  debugger
  return (
    <div className="guest-list">
      { guestList.guestList.map(( guest ) => {
          return <Guest
            key={ guest.id }
            name={ guest.name }
            attendees={guest.attendees}
          />
        })
      }
    </div>
  );
}

export default GuestList
