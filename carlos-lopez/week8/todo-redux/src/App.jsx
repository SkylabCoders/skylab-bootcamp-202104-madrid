import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import store from './redux/store';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store()}>
      <Router>
        <h1>TO DO LIST</h1>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
