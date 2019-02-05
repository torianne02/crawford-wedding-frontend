export const fetchGuestList = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return (dispatch) => {
    fetch('http://localhost:3001/attending', data)
    .then(response => response.json())
    .then(guests => {
      dispatch({
        type: 'FETCH_GUEST_LIST',
        data: guests
      })
    })
    .catch(error => console.log(error));
  }
}
