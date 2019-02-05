export function fetchGuestList() {
  return (dispatch) => {
    dispatch({type: 'FETCH_GUEST_LIST'});
    fetch(`http://localhost:3001/attending`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(guests => dispatch({type: 'ADD_GUEST_LIST_TO_STATE', data: guests}))
    .catch(error => console.log(error));
  }
}
