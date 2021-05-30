import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import List from './components/list/List';

function App() {
  return (
    <Router>
      <h1>Tour of Heroes</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/list">List</Link>
      <Switch>
        <Route exact path="/list" component={List} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>

  );
}

export default App;
