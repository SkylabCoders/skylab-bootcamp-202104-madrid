import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import singleTodoReducer from './singleTodoReducer';

const rootReducer = combineReducers({
  tasks: todoReducer,
  task: singleTodoReducer,
});

export default rootReducer;
