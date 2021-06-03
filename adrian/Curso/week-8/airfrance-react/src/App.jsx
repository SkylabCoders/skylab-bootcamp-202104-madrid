/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/home';
import Form from './components/form';
import Details from './components/details';
import configureStore from './redux/store';
import Header from './components/header';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
