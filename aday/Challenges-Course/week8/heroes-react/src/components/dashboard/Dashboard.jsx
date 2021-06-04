import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import heroes from '../../data/heroesData';

function Dashboard() {
  const [hero, setHero] = useState();
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
      <input
        type="text"
        id="newHero"
        placeholder="Add hero"
        value={heroName}
        onChange={(event) => setHeroName({ name: heroName })}
      />
      <button
        type="button"
        onClick={() => dispatchEvent(addHero({ name: heroName }))}
      >
        Add
      </button>
      <ul>
        {heroesList}
      </ul>
    </>
  );
}

export default Dashboard;
