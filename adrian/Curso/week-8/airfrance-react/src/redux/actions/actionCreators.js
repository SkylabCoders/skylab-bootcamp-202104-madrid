/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypeS';

export function login(email, password) {
  return {
    type: actionTypes.LOGIN,
    user: {
      email,
      password
    }
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT
  };
}

export function bookFlght(formData) {
  return async (dispatch) => {
    const { data } = await axios.post(
      process.env.REACT_APP_API_URL,
      formData
    );

    dispatch({
      type: actionTypes.BOOK_FLIGHT,
      data
    });
  };
}
