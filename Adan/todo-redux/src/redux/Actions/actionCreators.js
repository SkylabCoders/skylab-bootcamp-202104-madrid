/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:4000/api/tasks';

export function getTasks() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.GET_TASKS,
        tasks: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TASK_ERROR
      });
    }
  };
}
export function getOneTask(taskId) {
  // eslint-disable-next-line no-debugger
  debugger;
  return async (dispatch) => {
    const { data } = await axios(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.GET_ONE_TASK,
      task: data
    });
  };
}
export function addTask(task) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, task);
      dispatch({
        type: actionTypes.UPDATE_TASK,
        task: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TASK_ERROR
      });
    }
  };
}
export function modifyTask(taskId, description) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${taskId}`, description);
    dispatch({
      type: actionTypes.UPDATE_TASK,
      task: data
    });
  };
}
export function deleteTask(taskId) {
  // eslint-disable-next-line no-debugger
  return async (dispatch) => {
    const { data } = await axios.delete(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      task: data
    });
  };
}
