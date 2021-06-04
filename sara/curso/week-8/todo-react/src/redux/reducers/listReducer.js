import actionTypes from '../actions/actionTypes';

export default function listReducer(list = [], action) {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return action.list;
    default:
      return list;
  }
}
