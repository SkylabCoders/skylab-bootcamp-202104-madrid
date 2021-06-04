/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function todoReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return action.tasks;
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task,
      ];
    default:
      return tasks;
  }
}
export default todoReducer;
