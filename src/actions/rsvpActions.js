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

export function addRsvp(name, email, accept, attendees, songRequest) {
  return (dispatch) => {
    const body = JSON.stringify({name: name, email: email, accept: accept,
      attendees: attendees, song_request: songRequest})
    dispatch({ type: 'RSVP_REQUEST' })
    return fetch(`http://localhost:3001/rsvps`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_RSVP_TO_STATE', data: data}))
  }
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
