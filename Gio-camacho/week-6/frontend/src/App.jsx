import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
