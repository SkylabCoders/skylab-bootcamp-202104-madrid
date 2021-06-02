import actionTypes from '../actions/actionTypes';

function authReducer(auth = { isLogged: false }, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...auth,
        user: action.user,
        isLogged: true,
      };

    case actionTypes.LOGOUT:
      return {
        isLogged: false,
      };

    default:
      return auth;
  }
}

export default authReducer;
