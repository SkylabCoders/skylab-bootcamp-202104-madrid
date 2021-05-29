import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Details from './components/dashboard/Details';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
