import actionTypes from '../actions/actionTypes';

function heroSelectedReducer(heroSelected = {}, action) {
  switch (action.type) {
    case actionTypes.GET_BY_ID:
      return action.heroSelected;
    default:
      return heroSelected;
  }
}
export default heroSelectedReducer;
