import React from 'react';

const Guest = ( props ) => {
  return (
    <div>
      <p>{ props.name }: { props.songRequest }</p>
    </div>
  );
}

export default Guest
