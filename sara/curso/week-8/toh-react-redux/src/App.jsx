import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroesDashboard from './components/HeroDashboard';
import HeroesList from './components/HeroList';
import HeroDetail from './components/HeroDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HeroesDashboard} />
        <Route exact path="/list" component={HeroesList} />
        <Route exact path="/detail" component={HeroDetail} />
      </Switch>
    </Router>
  );
}

export default App;
