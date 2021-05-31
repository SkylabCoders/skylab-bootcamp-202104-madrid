/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './index.css';
import Sum from './components/Suma';
import Clicker from './components/Clicker';

import reportWebVitals from './reportWebVitals';

const clickBack = (letter) => alert(letter);

ReactDOM.render(
  <>
    <Hello name="Sara">
      <p>
        Esto es un hijo
      </p>
    </Hello>
    <p>
      <Sum a={4} b={4} />
    </p>
    <Clicker handleClick={clickBack} />
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
