import actionTypes from '../actions/actionTypes';

function heroeListReducer(herosList = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL:
      return action.heroes;
    default:
      return herosList;
  }
}
export default heroeListReducer;
