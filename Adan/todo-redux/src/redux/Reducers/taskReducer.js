/* eslint-disable no-underscore-dangle */
import actionTypes from '../Actions/actionTypes';

function tasksReducer(tasks = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return action.tasks;
    case actionTypes.POST_TASK:
      return [
        ...tasks,
        action.task
      ];
    case actionTypes.UPDATE_TASK:
      return tasks.map(
        (task) => (task._id === action.task._id
          ? { ...task, ...action.task }
          : task)
      );
    default:
      return tasks;
  }
}
export default tasksReducer;
