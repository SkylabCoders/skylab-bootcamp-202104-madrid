/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Form from './components/form';
import Details from './components/details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
