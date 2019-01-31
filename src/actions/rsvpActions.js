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

export function addRsvp(rsvp) {
  return (dispatch) => {
    dispatch({ type: 'RSVP_REQUEST' })
    return fetch(`http://localhost:3001/rsvps`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rsvp)
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
