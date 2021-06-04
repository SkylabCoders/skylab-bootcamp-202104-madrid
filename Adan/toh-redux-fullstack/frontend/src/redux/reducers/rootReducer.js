import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer
});
export default rootReducer;
