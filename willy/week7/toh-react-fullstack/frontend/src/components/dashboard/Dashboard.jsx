import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import List from '../list/List';

function dashboard() {
  return (
    <>
      <div className="dashboard">
        dashboard works! react shit!
      </div>
      <Router>
        <Link to="/list">list</Link>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default dashboard;
