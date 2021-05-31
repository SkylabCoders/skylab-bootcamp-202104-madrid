import React from 'react';
import { useParams } from 'react-router';
import heroes from '../data/herosData';

function HeroesDetail() {
  const { heroId } = useParams();
  const currentHero = heroes.find((hero) => hero.id.toString() === heroId);
  return (
    <div className="detail">
      <h1 className="detail__id">{currentHero.id}</h1>
      <h2 className="detail__name">{currentHero.name}</h2>
    </div>
  );
}

export default HeroesDetail;
