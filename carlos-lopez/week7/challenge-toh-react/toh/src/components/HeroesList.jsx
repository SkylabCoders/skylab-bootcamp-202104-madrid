/* eslint-disable no-unused-vars */
import React from 'react';
import heroes from '../data/heroesData';

function HeroesList() {
  const completeList = heroes.map((heroe) => (
    <li key={heroe.id}>
      {heroe.name}
      <button type="button">Further details</button>
    </li>
  ));
  return (
    <ul>
      {completeList}
    </ul>
  );
}
export default HeroesList;
