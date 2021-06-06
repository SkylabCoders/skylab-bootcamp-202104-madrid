import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <ToDoList />
    </Provider>
  );
}

export default App;
