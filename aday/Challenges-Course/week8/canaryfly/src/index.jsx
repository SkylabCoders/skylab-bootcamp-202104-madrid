import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/home/Home';
import reportWebVitals from './reportWebVitals';
import FormComponent from './components/form/Form';
import SubmitComponent from './components/submit/Submit';
import configureStore from './redux/store';
// import ProtectedRoute from './components/protected-route/ProtectedRoute';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/form" exact component={FormComponent} />
        <Route path="/submit" exact component={SubmitComponent} />
        {/* <ProtectedRoute path="/" exact component={App} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
