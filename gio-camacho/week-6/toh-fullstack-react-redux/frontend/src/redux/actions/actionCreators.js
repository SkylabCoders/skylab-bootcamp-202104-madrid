import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:5000/api/heroes/';

export function getAll() {
  return async (dispatch) => {
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.GET_ALL_HEROES,
      heroes: data,
    });
  };
}

export function create(hero) {
  return async (dispatch) => {
    const { data } = await axios.post(url, hero);
    dispatch({
      type: actionTypes.POST_HERO,
      hero: data,
    });
  };
}

export function updateById(hero) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}${hero.id}`, hero);
    dispatch({
      type: actionTypes.UPDATE_HERO_BY_ID,
      hero: data,
    });
  };
}

export function deleteById(hero) {
  return async (dispatch) => {
    const { data } = await axios.delete(`${url}${hero.id}`, hero);
    dispatch({
      type: actionTypes.DELETE_HERO_BY_ID,
      hero: data,
    });
  };
}
