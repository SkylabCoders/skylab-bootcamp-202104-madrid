import actionTypes from '../Actions/actionTypes';

function taskReducer(task = {}, action) {
  switch (action.type) {
    case actionTypes.POST_TASK:
      return action.task;
    case actionTypes.UPDATE_TASK:
      return action.task;
    default:
      return task;
  }
}
export default taskReducer;
