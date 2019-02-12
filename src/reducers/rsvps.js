export default function rsvps( state = {
  rsvp: [],
  rsvps: [],
  rsvpRequestInProgress: false,
}, action ) {
  switch ( action.type ) {
    case 'RSVP_REQUEST':
      return { ...state, rsvpRequestInProgress: true }
    case 'ADD_RSVP_TO_STATE':
      return { rsvpRequestInProgress: false, rsvp: action.data, rsvps: state.rsvps.concat(action.data) }
    case 'FETCH_ALL_RSVPS':
      return { ...state, rsvps: [] }
    case 'ADD_ALL_RSVPS_TO_STATE':
      return { ...state, rsvps: action.data }

    default:
      return state;
  }
}
