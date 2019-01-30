export default function rsvps( state = {
  isFetchingRsvp: false,
  rsvp: [],
  rsvps: [],
  rsvpRequestInProgress: false,
}, action ) {
  switch ( action.type ) {
    case 'FETCH_RSVP':
      return { ...state, isFetchingRsvp: true, rsvp: [] }
    case 'ADD_RSVP_TO_STATE':
      return { isFetchingRsvp: false, rsvpRequestInProgress: false, rsvp: action.data }
    case 'FETCH_ALL_RSVPS':
      return { isFetchingRsvp: true, rsvps: [] }
    case 'ADD_ALL_RSVPS_TO_STATE':
      return { isFetchingRsvp: false, rsvps: action.data }
    case 'RSVP_REQUEST':
      return { ...state, rsvpRequestInProgress: true }

    default:
      return state;
  }
}
