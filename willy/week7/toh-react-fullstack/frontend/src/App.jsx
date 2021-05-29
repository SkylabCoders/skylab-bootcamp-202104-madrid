import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import List from './components/list/List';

function App() {
  <Router>
    <Switch>
      <Route exact path="/list" component={List} />
      <Redirect to="/Dashboard" />
    </Switch>
  </Router>;

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
