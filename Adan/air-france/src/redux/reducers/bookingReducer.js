import { combineReducers } from 'redux';
import bookingReducer from './rootReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: authReducer,
  booking: bookingReducer
});
