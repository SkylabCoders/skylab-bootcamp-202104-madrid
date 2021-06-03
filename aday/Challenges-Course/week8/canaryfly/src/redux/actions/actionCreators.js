// import axios from 'axios';
import actionsTypes from './actionsTypes';

export function login(email, password) {
//   return async (dispatch) => {
//     const { data } = await axios.post(
//       process.env.REACT_APP_API_URL,
//       { email, password },
//     );
//     dispatch({
//       type: actionsTypes.LOGIN,
//       user: data,
//     });
//   };

  return {
    type: actionsTypes.LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function logout() {
  return {
    type: actionsTypes.LOGOUT,
  };
}

export function bookFlight(formData) {
//   return async (dispatch) => {
//     const { data } = await axios.post(
//       process.env.REACT_APP_API_URL,
//       formData,
//     );
//     dispatch({
//       type: actionsTypes.BOOK_FLIGHT,
//       flightData: data,
//     });
//   };
  return {
    type: actionsTypes.BOOK_FLIGHT,
    flightData: formData,
  };
}
