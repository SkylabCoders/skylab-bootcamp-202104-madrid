import React from 'react';
import heroes from '../data/heroesData';

function HeroesDashboard() {
  let listHeroes = [...heroes];
  listHeroes = listHeroes.sort(() => Math.random() - 0.5);
  const randomHeroes = listHeroes.slice(0, 4);
  const listToRender = randomHeroes.map((heroe) => <li key={heroe.id}>{heroe.name}</li>);
  return (
    <ul>
      {listToRender}
    </ul>
  );
}

export default HeroesDashboard;
