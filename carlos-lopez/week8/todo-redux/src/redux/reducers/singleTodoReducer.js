/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function singleTodoReducer(task = {}, action) {
  if (action.type === actionTypes.UPDATE_TASK) {
    return action.task;
  }
  return task;
}
export default singleTodoReducer;
