/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../data/heroesData';
import './HeroesList.css';

function HeroesList() {
  const completeList = heroes.map((heroe) => (
    <li className="list_li" key={heroe.id}>
      <Link class="hero_names" to={`/heroesDetail/${heroe.id}`}>
        {heroe.name}
      </Link>
    </li>
  ));
  return (
    <ul className="list_ul">
      {completeList}
    </ul>
  );
}
export default HeroesList;
