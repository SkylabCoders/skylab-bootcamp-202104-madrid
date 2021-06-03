import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import DashboardComponent from '../dashboard/Dashboard';
import DetailsComponent from '../details/Details';

function App() {
  return (
    <header className="App-header">
      <h1>Tour of Heroes</h1>
      <Router>
        <div>
          <Link to="/">Dashboard</Link>
          {' '}
          <br />
          <Link to="/details">Details</Link>
        </div>
        <Switch>
          <Route exact path="/" component={DashboardComponent} />
          <Route exact path="/details" component={DetailsComponent} />
        </Switch>
      </Router>
    </header>
  );
}

export default App;
