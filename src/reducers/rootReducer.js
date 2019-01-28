export default function rootReducer( state = {
  isFetchingRsvp: false,
  rsvp: [],
  rsvps: [],
  // need something in regards to requesting rsvp
}, action ) {
  switch ( action.type ) {
    case 'FETCH_RSVP':
      // return statement to get rsvp from API
    case 'ADD_RSVP_TO_STATE':
      // return statement adding rsvp to state
    case 'FETCH_ALL_RSVPS':
      // return statement to get all rsvps from API
    case 'ADD_ALL_RSVPS_TO_STATE':
      // return statement adding all rsvps to state
    // need 'POST' for RSVP - 'RSVP_REQUEST' && 'ADD_RSVP_TO_STATE'
    default:
      return state;
  }
}
