import { combineReducers } from 'redux';
import rsvps from './rsvps';
import guestList from './guestList';

export default combineReducers({
  rsvps,
  guestList
})
