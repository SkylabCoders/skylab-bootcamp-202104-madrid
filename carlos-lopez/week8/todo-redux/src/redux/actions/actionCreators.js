/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_API_URL;
export function getTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_TASKS,
      });
    }
  };
}
