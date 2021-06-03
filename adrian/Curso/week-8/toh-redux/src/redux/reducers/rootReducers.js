import { combineReducers } from 'redux';
import heroListReducer from './heroListReducer';
import heroReducer from './heroReducer';

export default combineReducers({
  heroList: heroListReducer,
  heroSelected: heroReducer
});
