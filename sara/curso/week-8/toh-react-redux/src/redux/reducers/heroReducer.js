import actionTypes from '../actions/actionTypes';

export default function heroReducer(hero = {}, action) {
  switch (action.type) {
    case actionTypes.GET_ONE:
      return action.hero;
    default:
      return hero;
  }
}
