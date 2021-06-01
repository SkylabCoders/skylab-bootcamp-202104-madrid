import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Form from '../form';
import Contract from '../contract';

function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/form" component={Contract} />
        </Switch>
      </Router>
      <Link to="/form">FILL THE GAPS</Link>
    </section>
  );
}

export default App;
