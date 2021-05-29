import React, { useState } from 'react';
import HeroesList from './components/HeroesList';
import HeroDetail from './components/HeroDetail';
import heroes from './data/heroesData';
import './App.css';

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  return (
    <div className="App">
      <h1>Tour of Heroes</h1>
      <HeroesList heroesList={heroes} setSelectedHero={setSelectedHero} />
      {selectedHero && (<HeroDetail hero={selectedHero} />) }
    </div>
  );
}

export default App;
