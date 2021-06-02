import actiontypes from '../actions/actionTypes';

export default function bookingReducir(booking = {}, action) {
  if (action.type === actiontypes.BOOK_FLIGHT) {
    return action.flightData;
  }
  return booking;
}
