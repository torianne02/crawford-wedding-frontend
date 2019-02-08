export default function rsvps( state = {
  rsvp: [],
  rsvps: [],
}, action ) {
  switch ( action.type ) {
    case 'ADD_RSVP_TO_STATE':
      return { rsvp: action.data, rsvps: state.rsvps.concat(action.data) }
    case 'FETCH_ALL_RSVPS':
      return { ...state, rsvps: [] }
    case 'ADD_ALL_RSVPS_TO_STATE':
      return { ...state, rsvps: action.data }

    default:
      return state;
  }
}
