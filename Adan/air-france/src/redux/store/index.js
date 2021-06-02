import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => createStore(
  rootReducer,
  initialState,
  composeEnhacers(applyMiddleware(thunk))
);
