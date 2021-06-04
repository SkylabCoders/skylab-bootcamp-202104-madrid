import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import toDoList from './components/ToDoList';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Route exact path="/" component={toDoList} />
      </Router>
    </Provider>
  );
}

export default App;
