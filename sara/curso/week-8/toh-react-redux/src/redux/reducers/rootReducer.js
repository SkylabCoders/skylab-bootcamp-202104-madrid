import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import heroReducer from './heroReducer';

export default combineReducers({
  heroes: heroesReducer,
  hero: heroReducer,
});
