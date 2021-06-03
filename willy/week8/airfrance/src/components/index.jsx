import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import Details from './Details';

function index() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </Router>

    </>
  );
}

export default index;
