import axios from 'axios';
import actionTypes from './actionTypeS';

export function login(email, password) {
  return async (dispatch) => {
    const { data } = await axios.post(
      (process.env.APIURL),
      { email, password }
    );

    dispatch({
      type: actionTypes.LOGOUT,
      user: data
    });
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
