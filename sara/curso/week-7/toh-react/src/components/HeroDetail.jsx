import React from 'react';
import { useParams } from 'react-router';
import heroes from '../data/heroesData';
import './HeroDetail.css';

function HeroesDetail() {
  const { heroId } = useParams();
  const currentHero = heroes.find((hero) => hero.id.toString() === heroId);
  return (
    <div className="detail_main">
      <div className="detail_container">
        <h1 className="detail_id">{currentHero.id}</h1>
        <h2 className="detail_name">{currentHero.name}</h2>
      </div>
    </div>

  );
}
export default HeroesDetail;
