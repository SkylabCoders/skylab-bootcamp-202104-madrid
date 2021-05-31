/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Sum from './components/Sum';
import Clicker from './components/Clicker';

const clickCallback = (letter) => console.log(letter);

ReactDOM.render(
  <>
    <Hello name="Carlos">
      <p>Esto es un elemento hijo</p>
      <span>Este e sotro hijo</span>
    </Hello>
    <Sum a={5} b={4} />
    <Clicker handleClick={clickCallback} />
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
