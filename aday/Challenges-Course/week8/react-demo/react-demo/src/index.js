/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Sum from './components/Sum';
import Clicker from './components/Clicker';

// eslint-disable-next-line no-alert
const clickCallback = (letter) => alert(letter);

ReactDOM.render(
  <>
    <Hello name="Aday">
      <ul>
        <li>Esto es un elemento hijo</li>
      </ul>
    </Hello>
    <p>
      <Sum a={87} b={187} />
    </p>
    <Clicker handleClick={(clickCallback)} />
  </>,
  document.getElementById('root'),
);

reportWebVitals();
