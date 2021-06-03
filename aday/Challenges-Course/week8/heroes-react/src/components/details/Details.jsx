import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import heroes from '../../data/heroesData';

function Details() {
  const { heroId } = useParams();
  const currentHero = heroes.find((hero) => hero.id === +heroId);

  return (
    <>
      <Link to="/" className="App-link">Home</Link>
      <div className="detail_main">
        <div className="detail_container">
          <h1 className="detail_name">{currentHero.name}</h1>
          <h2 className="detail_id">{currentHero.id}</h2>
        </div>
      </div>
    </>
  );
}

export default Details;
