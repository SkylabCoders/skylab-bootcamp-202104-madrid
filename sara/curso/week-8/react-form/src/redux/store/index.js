import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (inicialState) => createStore(
  rootReducer,
  inicialState,
  composeEnhancers(applyMiddleware(thunk)),
);
