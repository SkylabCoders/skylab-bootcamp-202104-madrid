import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:4000/api/heroes';

export function getAll() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.GETALL,
        heroes: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_HEROES_ERROR'
      });
    }
  };
}

export default getAll;
