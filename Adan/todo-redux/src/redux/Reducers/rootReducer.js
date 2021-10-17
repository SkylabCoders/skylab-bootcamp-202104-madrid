import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  task: taskReducer
});
export default rootReducer;
