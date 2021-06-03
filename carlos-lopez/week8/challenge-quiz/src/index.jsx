/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/List';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <List />
  </React.StrictMode>,
  document.getElementById('root'),
);
