import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {/* Dashboard */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
