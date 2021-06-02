import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import sumValues from './sumValuesReducer';
import auth from './authReducer';

export default combineReducers({
  quiz: quizReducer,
  sumValues,
  auth,
});
