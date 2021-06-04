import actionTypes from '../actions/actionTypes';

function todoReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return action.tasks;
    default:
      return tasks;
  }
}
export default todoReducer;
