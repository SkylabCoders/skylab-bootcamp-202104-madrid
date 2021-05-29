import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Dashboard from '../dashboard/Dashboard';

function List() {
  return (
    <>
      <div className="list">
        Estas en lista
      </div>
      <Router>
        <Link to="/dashboard">Dashboard</Link>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default List;
