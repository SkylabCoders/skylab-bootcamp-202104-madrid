import actionTypes from '../actions/actionTypes';

function heroeListReducer(heroes = [], action) {
  switch (action.type) {
    case actionTypes.GETALL:
      return action.heroes;
    default:
      return heroes;
  }
}
export default heroeListReducer;
