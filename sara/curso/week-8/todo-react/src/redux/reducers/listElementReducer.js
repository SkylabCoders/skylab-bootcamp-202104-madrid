import actionTypes from '../actions/actionTypes';

export default function listReducer(listElement = {}, action) {
  switch (action.type) {
    case actionTypes.GET_LIST_ELEMENT:
      return action.list;
    case actionTypes.UPDATE_LIST_ELEMENT:
      return action.listElement;
    case actionTypes.DELETE_LIST_ELEMENT:
      return action.listElement;
    case actionTypes.CREATE_TASK:
      return action.listElement;
    default:
      return listElement;
  }
}
