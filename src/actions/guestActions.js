export function fetchGuest(id) {
  return(dispatch) => {
    dispatch({type: 'FETCH_GUEST'});
    fetch(`http://localhost:3001/guests/${id}`, {
      method: 'GET'})
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_GUEST_TO_STATE', data: data}))
  }
}

export function addRsvp() {
  // need to pass in variables
  // create new instance of guest and rsvp
  // 'POST' request to `http://localhost:3001/guests/${id}`
}

export function fetchAllGuests() {
  // fetch all guests
  // 'GET' request to `http://localhost:3001/guests`
}
