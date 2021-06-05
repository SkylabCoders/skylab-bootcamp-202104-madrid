import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/Store';
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store()}>

      <BrowserRouter>
        <nav>
          <Link to="/" />
        </nav>
        <Switch>
          <Route path="/" exact component={Todo} />

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
