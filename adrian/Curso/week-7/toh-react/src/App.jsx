/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import HerosList from './components/heroList';
import HerosDetail from './components/heroDetails';

function App() {
  const list = HerosList();
  return (
    <header>
      <h1>Tour of heroes</h1>
      <Router>
        <div>
          <Link to="/herosList">List</Link>
        </div>
        <Switch>
          <Route exact path="/herosList" component={HerosList} />
          <Route exact path="/herosDetail/:heroId" component={HerosDetail} />
        </Switch>
      </Router>
    </header>
  );
}
export default App;
