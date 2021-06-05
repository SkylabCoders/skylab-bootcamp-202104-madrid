import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroesDashboard from './components/HeroDashboard';
import HeroesList from './components/HeroList';
import HeroDetail from './components/HeroDetail';
import configureStore from './redux/store/index';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route exact path="/" component={HeroesDashboard} />
          <Route exact path="/list" component={HeroesList} />
          <Route exact path="/detail/:heroId" component={HeroDetail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
