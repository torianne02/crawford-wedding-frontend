export default function rsvps( state = {
  isFetchingGuestList: false,
  guestList: [],
}, action ) {
  switch ( action.type ) {
    case 'FETCH_GUEST_LIST':
      return { ...state, isFetchingGuestList: true, guestList: [] }
    case 'ADD_GUEST_LIST_TO_STATE':
      return { isFetchingGuestList: false, guestList: action.data }

    default:
      return state;
  }
}
