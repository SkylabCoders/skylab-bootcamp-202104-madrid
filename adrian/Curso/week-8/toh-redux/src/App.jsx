import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/heroDashboard';
import Detail from './components/heroDetail';
import List from './components/heroList';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/list" component={List} />
      </Switch>
    </Router>

  );
}

export default App;
