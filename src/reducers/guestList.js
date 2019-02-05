export default function rsvps( state = {
  guestList: [],
}, action ) {
  switch ( action.type ) {
    case 'FETCH_GUEST_LIST':
      return { ...state, guestList: action.data }

    default:
      return state;
  }
}
