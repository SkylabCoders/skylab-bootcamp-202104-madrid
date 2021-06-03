import actionTypes from '../actions/actionsTypes';

export default function bookingReducer(booking = {}, action) {
  if (action.type === actionTypes.BOOK_FLIGHT) {
    return action.flightData;
  }

  return booking;
}
