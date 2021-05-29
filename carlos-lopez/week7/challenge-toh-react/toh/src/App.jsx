/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import heroes from './data/heroesData';

function App() {
  const prueba = heroes.map((heroe) => <li>{heroe.name}</li>);
  return (
    <div>
      <h1>Tour of heroes</h1>
      <ul>{prueba}</ul>
    </div>
  );
}
export default App;
