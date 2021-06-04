import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';

function App() {
  return (
    <Router>
      <div className="container-fluid p-5 bg-light">
        <h1>Tour of Heroes</h1>
        <nav>
          <Link className="btn btn-secondary" to="/">Dashboad</Link>
          <Link className="btn btn-secondary ms-3" to="/heroes">Heroes</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/heroes" component={Heroes} />
      </Switch>
    </Router>
  );
}

export default App;
