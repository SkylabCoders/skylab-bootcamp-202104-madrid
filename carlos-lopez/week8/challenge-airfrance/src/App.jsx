import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Form from './components/form';
import Contract from './components/contract';
import Dashboard from './components/home';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/contract" component={Contract} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
