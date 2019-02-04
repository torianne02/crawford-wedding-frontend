import { combineReducers } from 'redux';
import rsvps from './rsvps';
import guestList from './guestList';

const rootReducer = combineReducers({
  rsvps,
  guestList
});

export default rootReducer
