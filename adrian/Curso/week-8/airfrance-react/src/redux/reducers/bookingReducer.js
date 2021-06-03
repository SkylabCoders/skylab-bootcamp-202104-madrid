import actionTypes from '../actions/actionTypeS';

export default function bookingReducer(booking = {}, action) {
  if (action.types === actionTypes.BOOK_FLIGHT) {
    return action.flightData;
  }
  return booking;
}
