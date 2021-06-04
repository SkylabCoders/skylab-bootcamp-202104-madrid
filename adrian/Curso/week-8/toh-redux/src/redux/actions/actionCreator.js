import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:4000/api/heroes';

export function getAll() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.GET_ALL,
      heroes: data
    });
  };
}

export function getHeroById(heroId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${heroId}`);
    dispatch({
      type: actionTypes.GET_BY_ID,
      heroSelected: data
    });
  };
}
