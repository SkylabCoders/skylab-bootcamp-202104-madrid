import { combineReducers } from 'redux';
import heroesReducer from '../reducers/heroesReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
});

export default rootReducer;
