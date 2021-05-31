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
import Details from './components/details/Details';

function App() {
  return (
    <Router>
      <h1>Tour of Heroes</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/list">List</Link>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/list" component={List} />
      </Switch>
    </Router>

  );
}

export default App;
