// import axios from 'axios';
import actiontypes from './actionTypes';

export function login(email, password) {
//   return async (dispatch) => {
//     const { data } = await axios.post(
//       process.env.REACT_APP_API_URL, { email, password }
//     );
//     dispatch({
//       type: actiontypes.LOGIN,
//       user: data
//     });
//   };

  return {
    type: actiontypes.LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: actiontypes.LOGOUT
  };
}

export function bookFlight(formData) {
//   return async (dispatch) => {
//     const { data } = await axios.post(
//       process.env.REACT_APP_API_URL,
//       formData
//     );

  //     dispatch({
  //       type: actiontypes.BOOK_FLIGHT,
  //       flightData: data
  //     });
  //   };

  return {
    type: actiontypes.BOOK_FLIGHT,
    flightData: formData
  };
}
