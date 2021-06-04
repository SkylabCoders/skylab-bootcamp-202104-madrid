import actionTypes from '../actions/actionTypes';

export default function listReducer(list = [], action) {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return action.list;
    case actionTypes.GET_CREATE_LIST_ELEMENT:
      return action.list;
    default:
      return list;
  }
}
