import React from 'react';
import Guest from './Guest';

const GuestList = ( props ) => {
  return (
    <div className="guest-list">
      { props.map(book => <Guest name={ guest.name } />)}
    </div>
  );
}

export default Guests
