import axios from 'axios';
import actiontypes from './actionsTypes';

const URL = 'http://localhost:4000/api/heroes/';

export function getAll() {
  return async (dispatch) => {
    const { data } = await axios.get(
      URL
    );
    dispatch({
      type: actiontypes.GET_ALL_HEROES,
      hero: data
    });
  };
}

export function createHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.post(
      URL, hero
    );
    dispatch({
      type: actiontypes.POST_HERO,
      hero: data
    });
  };
}

export function updateHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.put(
      `${URL}${hero.id}`, hero
    );
    dispatch({
      type: actiontypes.UPDATE_HERO_BY_ID,
      hero: data
    });
  };
}

export function deleteHero(id) {
  return async (dispatch) => {
    await axios.delete(
      `${URL}${id}`
    );
    dispatch({
      type: actiontypes.DELETE_HERO_BY_ID,
      hero: id
    });
  };
}
