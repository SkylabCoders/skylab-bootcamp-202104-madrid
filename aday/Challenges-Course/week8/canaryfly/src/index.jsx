import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/home/App';
import reportWebVitals from './reportWebVitals';
import FormComponent from './components/form/Form';
import SubmitComponent from './components/submit/Submit';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/form" exact component={FormComponent} />
      <Route path="/submit" exact component={SubmitComponent} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
