import actionTypes from './actionTypes';

export function login() {
  return async (dispatch) => {
    // const userdata = await axios...
    dispatch({
      type: actionTypes.LOGIN,
      user: {
        name: 'Gilbe',
        age: 34,
      },
    });
  };
}

export function logout() {
  return async (dispatch) => {
    // await axios...
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };
}
