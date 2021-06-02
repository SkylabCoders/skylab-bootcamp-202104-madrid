import axios from 'axios';
import actionTypes from './actionTypes';

export function login(email, password) {
  return async (dispatch) => {
    const { data } = await axios.post(
      process.env.APIURL,
      { email, password },
    );
    dispatch({
      type: actionTypes.LOGIN,
      user: data,
    });
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function bookFlight(formData) {
  return async (dispatch) => {
    const { data } = await axios.post(
      process.env.APIURL,
      { formData },
    );
    dispatch({
      type: actionTypes.BOOK_FLIGHT,
      data,
    });
  };
}
