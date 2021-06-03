/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

export function getAll() {
  const url = 'http://localhost:4000/api/heroes';
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.GET_ALL,
      heroes: data,
    });
  };
}
