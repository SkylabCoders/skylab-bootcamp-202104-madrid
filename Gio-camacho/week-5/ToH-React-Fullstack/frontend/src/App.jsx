import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import List from './components/List/List';

function App() {
  return (
    <Router>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/list">List</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/list" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
