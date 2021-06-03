import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import List from './components/List';

function App() {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/List">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/List" component={List} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
