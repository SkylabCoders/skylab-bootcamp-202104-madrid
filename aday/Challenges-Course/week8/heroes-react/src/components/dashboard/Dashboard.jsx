import React from 'react';
import heroes from '../../data/heroesData';

function Dashboard() {
  const heroesList = [...heroes];
  return (
    <div>

      <h2>{heroesList.name}</h2>
    </div>
  );
}

export default Dashboard;
