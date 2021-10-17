/* eslint-disable no-underscore-dangle */
import actionTypes from '../Actions/actionTypes';

function tasksReducer(tasks = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return action.tasks;
    default:
      return tasks;
  }
}
export default tasksReducer;
