/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

export function getTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(process.env.REACT_APP_API_URL);
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: [],
      });
    }
  };
}
