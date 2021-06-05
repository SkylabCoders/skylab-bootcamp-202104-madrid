import { combineReducers } from 'redux';
import heroListReducer from './heroListReducer';
import heroSelectedReducer from './heroSelectedReducer';

export default combineReducers({
  heroList: heroListReducer,
  heroSelected: heroSelectedReducer
});
