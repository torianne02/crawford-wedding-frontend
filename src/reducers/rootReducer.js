import { combineReducers } from 'redux';
import rsvps from './rsvps';
import guestList from './guestList';

const rootReducer = combineReducers({
  rsvps: rsvps,
  guestList: guestList
});

export default rootReducer
