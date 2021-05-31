/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import heros from '../data/herosData';

const HerosList = () => (
  <ul className="main__ul">
    {
      heros.map((hero) => (
        <li className="ul__hero" key={hero.id}>
          <Link to={`/herosDetail/${hero.id}`}>
            {hero.name}
          </Link>
        </li>
      ))
    }
  </ul>
);

export default HerosList;
