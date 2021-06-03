import actionsTypes from '../actions/actionsTypes';

export default function authReducer(user = {}, action) {
  switch (action.type) {
    case actionsTypes.LOGIN:
      return action.user;

    case actionsTypes.LOGOUT:
      return {};

    default:
      return user;
  }
}
