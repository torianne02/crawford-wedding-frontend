export default function rootReducer( state = {
  isFetchingGuest: false,
  guest: [],
  guests: [],
  rsvps: [],
  // need something in regards to requesting rsvp
}, action ) {
  switch ( action.type ) {
    case 'FETCH_GUEST':
      // return statement to get guest from API
    case 'ADD_GUEST_TO_STATE':
      // return statement adding guest to state
    case 'FETCH_ALL_GUESTS':
      // return statement to get all guests from API
    case 'ADD_ALL_GUESTS_TO_STATE':
      // return statement adding all guests to state
    // need case for RSVP - 'RSVP_REQUEST' && 'ADD_RSVP_TO_STATE'
    default:
      return state;
  }
}
