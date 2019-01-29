export function fetchRsvp(id) {
  return(dispatch) => {
    dispatch({type: 'FETCH_RSVP'});
    fetch(`http://localhost:3001/rsvps/${id}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_RSVP_TO_STATE', data: data}))
  }
}

export function addRsvp(name, email, accept, attendees, song_request) {
  return (dispatch) => {
    // const body = JSON.stringify({})
  }

  // need to pass in variables
  // create new instance of guest and rsvp
  // 'POST' request to `http://localhost:3001/guests/${id}`
}

export function fetchAllRsvps() {
  return (dispatch) => {
    dispatch({type: 'FETCH_ALL_RSVPS'});
    fetch(`http://localhost:3001/rsvps`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_ALL_RSVPS_TO_STATE', data: data}))
  }
}
