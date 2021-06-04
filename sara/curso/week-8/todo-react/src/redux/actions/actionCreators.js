/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:4000/api/task';

export function getList() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.GET_LIST,
      list: data,
    });
  };
}

export function getListElement(taskId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.GET_LIST_ELEMENT,
      listElement: data,
    });
  };
}

export function createTask(newTask) {
  return async (dispatch) => {
    const { data } = await axios.post(url, newTask);
    dispatch({
      type: actionTypes.CREATE_TASK,
      listElement: data,
    });
  };
}

export function deleteTask(taskId) {
  return async (dispatch) => {
    const { data } = await axios.delete(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_LIST_ELEMENT,
      listElement: data,
    });
  };
}
