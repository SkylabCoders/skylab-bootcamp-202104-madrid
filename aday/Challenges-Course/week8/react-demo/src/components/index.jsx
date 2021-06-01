import React from 'react';
import Hello from './Hello';
import Sum from './Sum';
import Clicker from './Clicker';
import Count from './Count';

// eslint-disable-next-line no-alert
const clickCallback = (letter) => alert(letter);

function Index() {
  return (
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
      <Count />
    < />
  );
}

export default Index;
