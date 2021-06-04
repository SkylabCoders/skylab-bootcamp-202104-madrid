import React from 'react';
import { Link } from 'react-router-dom';

function heroDashboard() {
  return (
    <section>
      <h1>DASHBOARD</h1>
      <Link to="/list">List</Link>
    </section>
  );
}

export default heroDashboard;
