/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import heroes from './data/heroesData';

let listHeroes;
function getRandomHeroes(list) {
  listHeroes = list.sort(() => Math.random() - 0.5);
}

function App() {
  getRandomHeroes(heroes);
  const randomHeroes = listHeroes.slice(0, 4);
  const prueba = randomHeroes.map((heroe) => <li key={heroe.id}>{heroe.name}</li>);
  return (
    <div>
      <h1>Tour of heroes</h1>
      <ul>{prueba}</ul>
    </div>
  );
}
export default App;
