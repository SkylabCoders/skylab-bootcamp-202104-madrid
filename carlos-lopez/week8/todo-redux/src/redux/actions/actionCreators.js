/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
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
export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(process.env.REACT_APP_API_URL, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data,
    });
  };
}
export function updateTask(id, tarea) {
  debugger;
  return async (dispatch) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, tarea);
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data,
    });
  };
}
