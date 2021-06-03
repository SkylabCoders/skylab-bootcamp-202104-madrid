import React from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../data/heroesData';

function Dashboard() {
  const heroesList = heroes.map((heroe) => (
    <li key={heroe.id}>

      <Link to={`/details/${heroe.id}`}>
        {heroe.name}
      </Link>
    </li>
  ));
  return (
    <>
      <Link to="/" className="App-link">Home</Link>
      <ul>
        {heroesList}
      </ul>
    </>
  );
}

export default Dashboard;
