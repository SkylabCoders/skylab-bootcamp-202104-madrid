import { combineReducers } from 'redux';
import listReducer from './listReducer';
import listElementReducer from './listElementReducer';

export default combineReducers({
  list: listReducer,
  listElement: listElementReducer,
});
