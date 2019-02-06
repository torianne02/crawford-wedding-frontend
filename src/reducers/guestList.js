export default function rsvps( state = {
  guests: [],
}, action ) {
  switch ( action.type ) {
    case 'FETCH_GUEST_LIST':
      return { ...state, guests: action.data }

    default:
      return state;
  }
}
