/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_API_URL;

export function getHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.GET_HEROES,
        heroes: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_HERO,
      });
    }
  };
}
export function addHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.post(url, hero);
    dispatch({
      type: actionTypes.POST_HERO,
      hero: data,
    });
  };
}
export function deleteHero(heroId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${heroId}`);
    dispatch({
      type: actionTypes.DELETE_HERO,
      heroId,
    });
  };
}
export function modifyHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${hero._id}`, hero);
    dispatch({
      type: actionTypes.PUT_HERO,
      hero: data,
    });
  };
}

export function getOneHero(heroId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${heroId}`);
    dispatch({
      type: actionTypes.GET_ONE_HERO,
      hero: data,
    });
  };
}
