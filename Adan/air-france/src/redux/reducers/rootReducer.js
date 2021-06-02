import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: authReducer,
  booking: bookingReducer
});
