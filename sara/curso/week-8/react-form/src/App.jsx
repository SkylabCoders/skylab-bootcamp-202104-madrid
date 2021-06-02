import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
