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
      list: data,
    });
  };
}
