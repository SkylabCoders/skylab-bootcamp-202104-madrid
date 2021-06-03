import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
  user: authReducer,
  booking: bookingReducer,

});
