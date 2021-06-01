import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './components/home/App';
import FormComponent from './components/form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Router path="/" exact component={App} />
      <Router path="/form" component={FormComponent} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
