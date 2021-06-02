import actionTypes from '../actions/actionTypeS';

export default function authReducer(user = {}, action) {
  switch (action.types) {
    case actionTypes.LOGIN:
      return action.user;

    case actionTypes.LOGOUT:
      return {};

    default:
      return user;
  }
}
