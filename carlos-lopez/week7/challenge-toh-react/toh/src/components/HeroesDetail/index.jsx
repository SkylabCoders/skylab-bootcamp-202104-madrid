import React from 'react';
import { useParams } from 'react-router';
import heroes from '../../data/heroesData';

function HeroesDetail() {
  const { heroId } = useParams();
  const currentHero = heroes.find((hero) => hero.id === heroId);
  return (
    <ul>
      <li>
        <h1>{currentHero.id}</h1>
        <h2>{currentHero.name}</h2>
      </li>
    </ul>
  );
}
export default HeroesDetail;
