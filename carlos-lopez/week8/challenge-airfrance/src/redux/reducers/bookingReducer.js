import actionTypes from '../actions/actionTypes';

export default function bookingReducer(booking = {}, action) {
  if (action.type === actionTypes.BOOK_FLIGHT) {
    return action.flightData;
  }
  return booking;
}
