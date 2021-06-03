import actionTypes from '../actions/actionTypes';

export default function heroesReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL:
      return action.heroes;
    default:
      return heroes;
  }
}
