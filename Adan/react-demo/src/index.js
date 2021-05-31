/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import Sum from './components/Sum';
import Clicker from './components/Clicker';

const clickCallback = (letter) => console.log(letter);

ReactDOM.render(
  <>
    <Hello name="Gilbe">
      <p>Esto es un elemento hijo</p>
      <p>Esto es otro elemento</p>
    </Hello>
    <Sum a={5} b={4} />
    <Clicker handleClick={clickCallback} />
  </>,
  document.getElementById('root')
);
