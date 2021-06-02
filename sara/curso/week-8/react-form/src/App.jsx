import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';
import configureStore from './redux/store';
import Header from './components/Header';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
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
