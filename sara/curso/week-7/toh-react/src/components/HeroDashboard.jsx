import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../data/heroesData';
import './HeroDashboard.css';

function HeroesDashboard() {
  let listHeroes = [...heroes];
  listHeroes = listHeroes.sort(() => Math.random() - 0.5);
  const randomHeroes = listHeroes.slice(0, 4);
  const listToRender = randomHeroes.map((heroe) => (
    <li key={heroe.id}>
      <Link className="hero_name" to={`/heroesDetail/${heroe.id}`}>
        {heroe.name}
      </Link>
    </li>
  ));
  return (
    <ul>
      {listToRender}
    </ul>
  );
}

export default HeroesDashboard;
