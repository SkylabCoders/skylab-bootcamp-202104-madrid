/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../data/heroesData';

function HeroesList() {
  const completeList = heroes.map((heroe) => (
    <li key={heroe.id}>
      <Link to={`/heroesDetail/${heroe.id}`}>
        {heroe.name}
      </Link>
    </li>
  ));
  return (
    <ul>
      {completeList}
    </ul>
  );
}
export default HeroesList;
