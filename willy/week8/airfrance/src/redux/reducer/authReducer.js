import actionTypes from '../actions/actionTypes';

export default function authReduced(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.user;

    case actionTypes.LOGOUT:
      return {};
    default:
      return user;
  }
}
