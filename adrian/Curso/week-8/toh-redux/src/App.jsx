import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/heroDashboard';
import Detail from './components/heroDetail';
import List from './components/heroList';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/list" component={List} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
