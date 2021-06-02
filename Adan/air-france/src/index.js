/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/index';
import Form from './components/Form';
import Details from './components/Details';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
