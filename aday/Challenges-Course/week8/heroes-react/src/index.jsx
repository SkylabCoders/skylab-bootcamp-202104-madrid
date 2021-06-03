import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomeComponent from './components/home/Home';
import DashboardComponent from './components/dashboard/Dashboard';
import DetailsComponent from './components/details/Details';

ReactDOM.render(
  <Router>
    <div>
      <Link to="/dashboard" className="App-link">Dashboard</Link>
      {' '}
      <br />
      <Link to="/details" className="App-link">Details</Link>
    </div>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/dashboard" component={DashboardComponent} />
      <Route exact path="/details" component={DetailsComponent} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
