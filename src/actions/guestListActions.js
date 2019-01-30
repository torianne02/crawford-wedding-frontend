export function fetchGuestList() {
  return (dispatch) => {
    dispatch({type: 'FETCH_GUEST_LIST'});
    fetch(`http://localhost:3001/guest_list`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_GUEST_LIST_TO_STATE', data: data}))
  }
}
